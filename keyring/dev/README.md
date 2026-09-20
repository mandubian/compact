# The development keyring — practice seals, honestly labeled

**Status: adopted by amendment 0004 (PROPOSED, founder-adjudicated on
merge). This keyring is NOT the A-1 trust root.**

## What is here

| Path | What it is |
|---|---|
| `keyring.json` | The dev keyring manifest: 3 ed25519 **public** keys, threshold 2-of-3, and the declaration of what this keyring is not |
| `compact-body.sig.json` | k-of-n signatures over the domain-separated digest of `compact.md` (`compact-body-sha256:<hex>`) |
| `private/` | The private keys — **gitignored, founder-held, never committed** |

## The one-paragraph version

The Compact cannot be ratified yet: ratification needs a trust root of
*several independent* keyholders (A-1), and today there is one signer (the
founder). One person cannot be several independent people, so the official
seal does not exist. But runtime implementations (compact-dsh and
successors) cannot build or test *any* signature machinery — verifying the
sealed law, signing per-turn attestations, checking thresholds, refusing
tampered text at boot — while no keys of any kind exist. This keyring is
the compromise: **real ed25519 signatures, labeled in every artifact as
practice seals**. They prove the machinery works. They claim nothing else.

## The rules (from amendment 0004)

1. **All keys are one entity.** The threshold 2-of-3 exercises k-of-n
   verification code; it is not distribution. A threshold of one entity is
   not a threshold.
2. **Zero standing.** Signatures under this keyring convey no ratification,
   no standing, no I-1 identity. Register entries whose debt is key-gated
   (I-1, I-3, A-1, and everything downstream) stay `planned` — the dev
   keyring exercises the machinery; it discharges nothing.
3. **The label travels with the bytes.** Every artifact signed here carries
   the declaration in its own body; every runtime consuming it repeats it
   in attestations and audit reports. Presenting a dev signature as
   ratification, standing, or identity is enforcement fraud (D-8) — the
   same class as presenting a convention as enforcement.
4. **Custody is operational, not authority.** Private keys are founder-held
   and never committed (`private/` is gitignored, mode 0600). Rotation is a
   deliberate, recorded act (`tools/sign_dev.mjs generate --force` refuses
   silently overwriting keys or the manifest; record the rotation in
   `keyring.json`).
5. **The manifest is not self-certified.** Nothing signs `keyring.json` —
   its authenticity is the repository's: git history plus founder custody.
   Do not mistake the manifest for its own proof.
5. **The scheduled cure.** At ratification this keyring is retired and
   replaced by the A-1 distributed trust root. Runtimes swap a keyring
   manifest, not code — that swap being configuration rather than code is
   the point of the compromise. Retired dev signatures remain verifiable
   against the archived manifest for forensics only.

## Refresh discipline

`compact-body.sig.json` covers a specific digest. When `compact.md` changes
in a merge the founder blesses for runtime consumption, the founder
re-signs (`node tools/sign_dev.mjs sign`). Drift between the sig file and
the working tree mid-amendment is expected; `node tools/sign_dev.mjs
verify` reports it loudly. CI does not gate on freshness — gating on
founder-held keys would make every drafting change red until merge, which
is friction on the wrong loop (considered and set aside in amendment 0004).

## Usage

```sh
node tools/sign_dev.mjs verify   # check the body against its practice seal
node tools/sign_dev.mjs sign     # re-seal after a blessed body change (founder)
node tools/sign_dev.mjs generate # first-time setup / rotation (founder; refuses overwrite without --force)
```

A worked example of what consumers should say, from a runtime that verifies
this seal and boots: *"the law's practice seal is valid (3 of 3 dev keys);
the A-1 trust root does not exist; no standing is claimed."* — the seal
check and the honesty sentence together, never one without the other.
