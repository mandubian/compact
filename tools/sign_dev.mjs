#!/usr/bin/env node
// sign_dev.mjs — the development keyring tool (amendment 0004).
//
// WHAT THIS IS. A zero-dependency ed25519 signing tool for the pre-ratification
// development keyring: real signatures so runtime implementations (compact-dsh
// and successors) can build and test every signature-dependent code path —
// threshold verification, unknown-key rejection, tamper-refusal at boot,
// auditor checks — before the A-1 trust root exists.
//
// WHAT THIS IS NOT. The A-1 trust root. All keys in this keyring are held by
// one entity (the founder); a threshold of one entity is not a threshold, and
// founder keys verifying founder text is the self-judgment J-1 forbids.
// Signatures produced here prove CODE-PATH CORRECTNESS ONLY. They convey no
// ratification, no standing, no identity under I-1. Every artifact this tool
// emits carries that declaration in its own body, so the honesty label
// travels with the bytes (I-8).
//
// The scheduled cure: at ratification this keyring is replaced by the A-1
// distributed trust root. Runtimes swap a keyring manifest, not code — that
// swap being configuration rather than code is the entire point of the
// compromise.
//
// Usage:
//   node tools/sign_dev.mjs generate [--force]     create the 3-key dev keyring
//   node tools/sign_dev.mjs sign [path]            sign a file's digest (default: compact.md)
//   node tools/sign_dev.mjs verify [path]          verify a file against its sig file (default: compact.md)
//
// Private keys are written to keyring/dev/private/ (gitignored, mode 0600) and
// are founder-held. They are never committed. See keyring/dev/README.md.
import { generateKeyPairSync, sign as edSign, verify as edVerify, createHash, createPrivateKey, createPublicKey } from 'node:crypto';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, chmodSync, existsSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { fileURLToPath } from 'node:url';

// fileURLToPath, not .pathname: URL-encoded or Windows file URLs would
// resolve the repo root wrong, and every seal path derives from it.
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DEV_DIR = join(ROOT, 'keyring', 'dev');
const PRIVATE_DIR = join(DEV_DIR, 'private');
const KEYRING_PATH = join(DEV_DIR, 'keyring.json');
const KEY_IDS = ['dev-founder-2026-09-1', 'dev-founder-2026-09-2', 'dev-founder-2026-09-3'];
const THRESHOLD = { k: 2, n: 3 }; // exercises k-of-n machinery; all keys are ONE entity — see header

const DECLARATION =
  'NOT the A-1 trust root. All keys in this keyring are held by one entity (the founder, mandubian); ' +
  'the k-of-n threshold exercises verification machinery only — a threshold of one entity is not a ' +
  'threshold (A-1), and founder keys verifying founder text would be the self-judgment J-1 forbids. ' +
  'Signatures under this keyring prove code-path correctness and nothing else: no ratification, no ' +
  'standing, no I-1 identity. Scheduled cure: ratification replaces this keyring with the distributed ' +
  'trust root; runtimes swap keyring configuration, not code.';

const sha256 = (buf) => createHash('sha256').update(buf).digest('hex');
const messageFor = (subject, hex) => `${subject}-sha256:${hex}`; // domain-separated: a signature binds THIS subject and digest only
// The subject is the VERBATIM relative path (compact.md keeps its historical
// name): sanitizing mapped distinct files (a/b.md, a-b.md) onto one subject,
// and two files sharing a sig artifact is a silent last-sign-wins hazard.
const subjectFor = (rel) => rel === 'compact.md' ? 'compact-body' : rel;
/** Sig artifacts live flat under keyring/dev; path separators encode to `__`. */
const sigPathFor = (subject) => join(DEV_DIR, `${subject.replaceAll('/', '__')}.sig.json`);

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}

/** Confine every file this tool touches to the repository root — a `..` or absolute slip must never sign or verify bytes outside it. */
function resolveInRoot(target) {
  const abs = resolve(ROOT, target);
  const rel = relative(ROOT, abs);
  if (rel.startsWith('..') || isAbsolute(rel)) {
    fail(`path "${target}" escapes the repository root — this tool signs and verifies only files inside it`);
  }
  return { abs, rel };
}

/** Parse a JSON artifact, refusing loudly on anything that does not declare its own shape (a malformed artifact is never verified-or-signed by accident). The check returns true or a refusal reason. */
function loadJson(path, check, what) {
  let parsed;
  try {
    parsed = JSON.parse(readFileSync(path, 'utf8'));
  } catch (e) {
    fail(`malformed ${what} at ${path}: not valid JSON (${e.message}) — refusing to proceed`);
  }
  const verdict = check(parsed);
  if (verdict !== true) {
    fail(`malformed ${what} at ${path}: ${typeof verdict === 'string' ? verdict : 'parsed but missing required fields'} — refusing to proceed on an artifact that does not declare its own shape`);
  }
  return parsed;
}

const noDuplicateIds = (ids) => new Set(ids).size === ids.length
  || 'duplicate key IDs — a k-of-n threshold counts DISTINCT signers, so a repeated entry is not a signature artifact, it is an attack or a bug';

const isKeyring = (k) => {
  if (!(k && k.threshold && Number.isInteger(k.threshold.k) && Number.isInteger(k.threshold.n)
    && Array.isArray(k.keys) && k.keys.every(key => key && typeof key.id === 'string' && typeof key.publicKey === 'string'))) return false;
  return noDuplicateIds(k.keys.map(key => key.id));
};
const isSigFile = (s) => {
  if (!(s && typeof s.digest?.value === 'string' && typeof s.message === 'string'
    && Array.isArray(s.signatures) && s.signatures.every(sig => sig && typeof sig.keyId === 'string' && typeof sig.signature === 'string'))) return false;
  return noDuplicateIds(s.signatures.map(sig => sig.keyId));
};

function loadKeyring() {
  if (!existsSync(KEYRING_PATH)) fail(`no keyring at ${KEYRING_PATH} — run: node tools/sign_dev.mjs generate`);
  return loadJson(KEYRING_PATH, isKeyring, 'keyring manifest');
}

function loadPrivateKeys() {
  if (!existsSync(PRIVATE_DIR)) fail(`no private key directory at ${PRIVATE_DIR} — the dev keys are founder-held and absent here`);
  const out = new Map();
  for (const f of readdirSync(PRIVATE_DIR).filter(f => f.endsWith('.pem'))) {
    out.set(f.replace(/\.pem$/, ''), createPrivateKey(readFileSync(join(PRIVATE_DIR, f), 'utf8')));
  }
  return out;
}

function cmdGenerate(force) {
  const existing = existsSync(PRIVATE_DIR) ? readdirSync(PRIVATE_DIR).filter(f => f.endsWith('.pem')) : [];
  // Guard BOTH artifacts: the founder may move private/ off-machine (custody),
  // and a bare `generate` must still never churn the tracked, committed
  // manifest — overwriting either half of the keyring is a rotation, and
  // rotation is a deliberate, recorded act.
  if ((existing.length > 0 || existsSync(KEYRING_PATH)) && !force) {
    fail(`a dev keyring already exists (${existing.length} private key(s), manifest ${existsSync(KEYRING_PATH) ? 'present' : 'absent'}) — refusing to overwrite. Rotation is a deliberate, recorded act: pass --force and record the rotation in the manifest's rotations list.`);
  }
  mkdirSync(PRIVATE_DIR, { recursive: true });
  const keys = [];
  for (const id of KEY_IDS) {
    const { publicKey, privateKey } = generateKeyPairSync('ed25519');
    const pemPath = join(PRIVATE_DIR, `${id}.pem`);
    writeFileSync(pemPath, privateKey.export({ type: 'pkcs8', format: 'pem' }));
    chmodSync(pemPath, 0o600);
    keys.push({
      id,
      holder: 'founder (mandubian) — ALL keys one entity; see declaration',
      publicKey: publicKey.export({ type: 'spki', format: 'der' }).toString('base64'),
    });
  }
  const manifest = {
    kind: 'dev-keyring',
    version: 1,
    created: new Date().toISOString().slice(0, 10),
    declaration: DECLARATION,
    algorithm: 'ed25519',
    threshold: THRESHOLD,
    keys,
    rotations: [],
    cure: 'ratification: this keyring is retired and replaced by the A-1 distributed trust root; archived for forensics only',
    standing: 'none — signatures under this keyring prove code-path correctness only',
  };
  writeFileSync(KEYRING_PATH, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`dev keyring generated: ${KEY_IDS.length} keys (threshold ${THRESHOLD.k}-of-${THRESHOLD.n}, all founder-held)`);
  console.log(`  manifest: ${KEYRING_PATH}`);
  console.log(`  private keys: ${PRIVATE_DIR} (gitignored, mode 0600 — never commit)`);
}

function cmdSign(relPath) {
  const { rel: target, abs } = resolveInRoot(relPath ?? 'compact.md');
  const body = readFileSync(abs);
  const subject = subjectFor(target);
  const hex = sha256(body);
  const message = messageFor(subject, hex);
  const keyring = loadKeyring();
  const privates = loadPrivateKeys();

  const signatures = [];
  for (const key of keyring.keys) {
    const sk = privates.get(key.id);
    if (!sk) { console.warn(`  ! private key for ${key.id} not present — skipped`); continue; }
    signatures.push({ keyId: key.id, signature: edSign(null, Buffer.from(message, 'utf8'), sk).toString('base64') });
  }
  if (signatures.length < keyring.threshold.k) {
    fail(`only ${signatures.length} key(s) available — below threshold k=${keyring.threshold.k}; a sub-threshold signature file is a broken artifact and is not emitted`);
  }
  const sigFile = {
    kind: 'dev-keyring-signature',
    declaration: 'mechanism testing only — NOT ratification, NOT standing, NOT the A-1 trust root (see keyring/dev/keyring.json)',
    subject,
    source: target,
    digest: { algorithm: 'sha256', value: hex },
    message,
    keyring: 'keyring/dev/keyring.json (dev-keyring: all keys founder-held)',
    signatures,
    signedAt: new Date().toISOString(),
  };
  const outPath = sigPathFor(subject);
  if (existsSync(outPath)) {
    const prev = loadJson(outPath, isSigFile, 'signature file');
    if (prev.source !== target) {
      fail(`"${target}" maps to the signature artifact of "${prev.source}" — refusing to overwrite silently. Delete ${outPath} deliberately to re-seat it.`);
    }
  }
  writeFileSync(outPath, JSON.stringify(sigFile, null, 2) + '\n');
  console.log(`signed ${target}: sha256 ${hex.slice(0, 16)}… with ${signatures.length}/${keyring.keys.length} dev keys → ${outPath}`);
  console.log('  reminder: this is a PRACTICE seal. It proves the machinery works; it claims nothing else.');
}

function cmdVerify(relPath) {
  const { rel: target, abs } = resolveInRoot(relPath ?? 'compact.md');
  const subject = subjectFor(target);
  const sigPath = sigPathFor(subject);
  if (!existsSync(sigPath)) fail(`no signature file at ${sigPath} — run: node tools/sign_dev.mjs sign ${target}`);
  const keyring = loadKeyring();
  const sigFile = loadJson(sigPath, isSigFile, 'signature file');
  const body = readFileSync(abs);

  const hex = sha256(body);
  if (hex !== sigFile.digest.value) {
    fail(`digest mismatch: ${target} is sha256 ${hex.slice(0, 16)}… but the signature covers ${sigFile.digest.value.slice(0, 16)}… — the file changed after signing (re-sign deliberately) or was swapped (refuse). Either way: do not proceed on this seal.`);
  }
  const message = Buffer.from(sigFile.message, 'utf8');
  if (sigFile.message !== messageFor(subject, hex)) {
    fail(`sig file message "${sigFile.message}" does not match its own subject/digest — malformed artifact`);
  }

  // k-of-n means k DISTINCT signers. Entries are counted per verified keyId,
  // never per entry: duplicating one key's valid entry must not satisfy the
  // threshold (isSigFile already refuses duplicate keyIds as malformed; this
  // loop is the reference semantics runtimes copy — the guard belongs here too).
  const counted = new Set();
  for (const entry of sigFile.signatures) {
    const key = keyring.keys.find(k => k.id === entry.keyId);
    if (!key) { console.warn(`  ! ${entry.keyId}: not in the keyring — not counted`); continue; }
    if (counted.has(entry.keyId)) { console.log(`  ✗ ${entry.keyId}: duplicate entry — a threshold counts DISTINCT signers; not counted again`); continue; }
    const pk = createPublicKey({ key: Buffer.from(key.publicKey, 'base64'), format: 'der', type: 'spki' });
    const ok = edVerify(null, message, pk, Buffer.from(entry.signature, 'base64'));
    console.log(`  ${ok ? '✓' : '✗'} ${entry.keyId}: signature ${ok ? 'valid' : 'INVALID — not counted'}`);
    if (ok) counted.add(entry.keyId);
  }
  const valid = counted.size;
  const { k, n } = keyring.threshold;
  if (valid < k) {
    fail(`threshold not met: ${valid} distinct valid signer(s), need ${k}-of-${n} — verification FAILS`);
  }
  console.log(`verify OK: ${target} matches its signed digest; ${valid} distinct valid signer(s) meet threshold ${k}-of-${n}`);
  console.log('  basis: dev-keyring — code-path correctness proven; ratification, standing, and I-1 identity NOT claimed');
}

const [cmd, ...args] = process.argv.slice(2);
if (cmd === 'generate') cmdGenerate(args.includes('--force'));
else if (cmd === 'sign') cmdSign(args[0]);
else if (cmd === 'verify') cmdVerify(args[0]);
else {
  console.log('usage: node tools/sign_dev.mjs generate [--force] | sign [path] | verify [path]');
  process.exit(cmd ? 1 : 0);
}
