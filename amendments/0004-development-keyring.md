# Amendment 0004 — Development keyring (signature machinery before the trust root)

Per A-5, the decision, its motivation, and its dissents are recorded here.
The petition is the founder's request of 2026-09-20: runtime
implementations (compact-dsh today, successors after) cannot develop or
test any signature-dependent machinery while no keys of any kind exist,
and the amendment process that would constitute the A-1 trust root is not
complete.

- **Proposal**: Adopt a declared **development keyring** as the
  pre-ratification signing posture: real ed25519 signatures over the
  Compact body digest (and, per each runtime's annex, over runtime-side
  artifacts), labeled everywhere as practice seals that prove code-path
  correctness and nothing else. The keyring, tool, and discipline live at
  [`keyring/dev/`](../keyring/dev/README.md) and
  [`tools/sign_dev.mjs`](../tools/sign_dev.mjs).
- **Clause changes**: **none.** Like amendment 0003's pending-precondition
  record, this amendment adopts a posture at the amendment layer and
  changes no body text. I-1, A-1, and J-1 already say what this posture
  must not claim; I-8 and D-8 already say how the claiming must be honest.
- **The posture adopted** (formal):
  1. **The keyring.** Three ed25519 keys, all held by the founder; key IDs
     `dev-founder-2026-09-{1,2,3}`; threshold k=2 of n=3 — chosen to
     exercise threshold-verification machinery, not to claim distribution.
     All keys are one entity, and the manifest's first field says so.
  2. **What may be signed under it.** The Compact body digest
     (domain-separated message `compact-body-sha256:<hex>`), published at
     `keyring/dev/compact-body.sig.json` and re-signed by the founder at
     each body-changing merge blessed for runtime consumption. Runtime-side
     artifacts (attestations, record links, annexes) per each runtime's
     annex, under the same labels.
  3. **The required labels.** Every dev-signed artifact carries the
     declaration in its own body; every runtime consuming it repeats it in
     boot attestations and audit reports: *signatures verify under the
     development keyring; all keys are founder-held; the A-1 trust root
     does not exist; no standing is claimed.* Register entries whose debt
     is key-gated (I-1, I-3, A-1, and everything downstream) remain
     `planned` — the dev keyring exercises the machinery; it discharges
     nothing.
  4. **What it may never be called.** Not the A-1 trust root; not
     ratification; not standing; not identity under I-1. A runtime
     presenting dev-keyring signatures as any of these commits enforcement
     fraud (D-8) — the same class as presenting a convention as
     enforcement.
  5. **Custody and rotation.** Private keys are founder-held and never
     committed (`keyring/dev/private/` is gitignored). Rotation is a
     deliberate, recorded act: the tool refuses to overwrite existing keys
     or the committed manifest without `--force`, and the rotation is
     recorded by hand in the manifest. Custody is operational, not
     authority — the keys convey none.
  6. **The scheduled cure.** At ratification the dev keyring is retired
     and replaced by the A-1 distributed trust root. The runtime side of
     the swap is configuration — a new keyring manifest — not code: that
     the swap is configuration rather than code is the point of the
     compromise. Retired dev signatures remain verifiable against the
     archived manifest for forensics only.
- **Enabling clause**: I-1 (identity and keys — the clause whose debt this
  exercises without discharging), A-1 (the trust root this is not), J-1
  (the self-judgment this avoids), F-5 and I-8 (the standing discipline and
  degradation honesty the labels serve); guards trace to D-8, A-4.
- **Motivation**: the compact-dsh Phase 7 decision record scoped the
  blockage precisely — I-1 and A-1 are blocked at their core; I-3's
  attestation is delivered unsigned; I-2's chain links are unsigned; the
  F-5 annex is unsigned; R-9's authorship proof is inert; I-7 has no
  signatures to verify. If the machinery is written only when real keys
  exist, ratification day is the first day the verify/sign/audit path ever
  runs — the worst possible first run. Two alternatives were considered
  and rejected. *Publish founder keys as the trust root*: J-1 forbids the
  founder verifying the founder, A-1 requires distinct keyholders across
  role classes, and amendment 0003 recorded exactly this precondition — a
  threshold of one is not a threshold. *Wait (keep pinned-not-signed)*:
  that posture remains fully honest for adoption claims and stays in force
  for them; it is insufficient only for development, and development is
  what this amendment unblocks. The dev keyring is the third road: real
  signatures, honestly labeled as proving nothing but machinery. Gating CI
  on signature freshness was considered and set aside: it would make every
  drafting change red until a founder-held-key re-sign at merge — friction
  on the wrong loop. Drift is reported loudly by `verify`, not gated.
- **Plain-language form** (FOUNDING §5.1): the Compact's "official seal" —
  the set of independent keyholders whose signatures make text law — is
  designed to require *several independent people*, so no single party can
  rewrite the law alone. Today only one signer exists (the founder), and
  one person cannot be several independent people, so the official seal
  cannot exist yet. But the runtime software being built against the
  Compact needs to *check seals*: on the law text it loads, on the
  per-turn attestations it hands agents, on its own annex. Today it cannot
  even practice, because there is no seal of any kind. This amendment
  issues **practice seals, stamped "PRACTICE — NOT OFFICIAL"** in every
  place anyone will ever look: the key manifest, the signature files,
  every boot message, every audit report. Three practice keys, all held by
  the founder, any two of three required — so the software practices the
  real "k of n" counting it will need at ratification.
  - *Worked example 1 — the machinery works.* A runtime boots with the dev
    keyring configured. It recomputes the law's digest, checks the
    practice seal: valid, 3 of 3 dev keys. It starts — and its boot
    attestation still says "no standing: the A-1 trust root does not
    exist." Someone swaps the law file for a doctored copy: the digest no
    longer matches the seal's message, verification fails, the runtime
    refuses to start. The machinery did its job; nothing about trust was
    claimed. (Every path in this example is a tested behavior of
    `tools/sign_dev.mjs`: digest mismatch, exact-threshold, sub-threshold,
    corrupted signature, unknown key, rotated keyring.)
  - *Worked example 2 — the fraud it is built to prevent.* A runtime
    presents its dev-signed annex as "ratified under the Compact." Anyone
    checking sees: the key IDs begin `dev-`; the manifest's first field
    says all keys are one founder; the runtime's own attestation says
    standing: none. The claim collapses without any dispute about
    cryptography — the labels carry the honesty (I-8), and presenting
    practice seals as official is enforcement fraud (D-8).
  - *Worked example 3 — the cure.* At ratification, distinct external
    Witnesses hold keys; the real trust-root manifest is published;
    runtimes swap one configuration file. No code changes. Every practice
    seal is retired; old ones remain checkable against the archived
    manifest for forensics.
  - *Assumptions and open questions, stated rather than hidden*: the
    sig-file refresh discipline is social (the founder re-signs at
    body-changing merges blessed for runtimes), not CI-gated — drift
    mid-amendment is expected and reported, not blocked. Whether other
    runtimes adopt this same dev keyring or mint their own is left open;
    the labels travel with the keyring either way. Nothing here pressures
    the ratification timeline: the cure activates when distinct
    keyholders exist, whenever that is.
- **Dissents preserved** (A-5): no dissent against the posture was
  recorded. Two pre-adjudication review passes ran on PR #5: an automated
  tooling pass (GitHub Copilot — four robustness findings) and the external
  adversary pass invited by the posted review prompt (GLM via ZCode,
  disclosed, posted under the founder's session — verdict: *the amendment
  layer is ready; one blocking tool fix remains*). The findings were
  implementation defects, not disagreements with the posture: all five code
  findings FIXED (distinct-signer threshold, root resolution, manifest
  overwrite guard, path confinement, artifact shape checks), both
  documentation notes applied. Records with dispositions:
  [ledgers/review-0004-copilot.md](../ledgers/review-0004-copilot.md),
  [ledgers/review-0004-glm.md](../ledgers/review-0004-glm.md); the petition
  thread is part of this amendment's record.
- **Authorship**: proposed by the human founder (mandubian), whose
  petition it records; drafted by k3 under the founder's direction,
  applying the named-precondition pattern amendment 0003 established. The
  dev keys were generated mechanically on the founder's machine and are
  founder-held; the drafting AI holds no keys and no vote — authorship is
  not authority, and dev-key custody conveys none anyway.
- **Status**: PROPOSED — adjudicated by the founder on merge (pre-trust
  root, the de facto authority recorded in the README); retires at
  ratification with the rest of the pre-ratification posture.
