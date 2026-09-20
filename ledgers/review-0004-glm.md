# Review ledger — amendment 0004 (development keyring), GLM adversary pass

- **Reviewer**: an AI system — a ZCode agent running GLM, the
  drafting-assistant lineage recorded in amendments 0001 and 0003 — at the
  founder's request and under the founder's authenticated session, with
  authorship disclosed in its own review per the A-6 convention. Posted as
  a PR #5 review (2026-09-20). Reviewed HEAD: `2e111fa` (post-Copilot
  remediation). This was the external adversary pass invited by the review
  prompt posted to the PR thread; the reviewer is a different system from
  the drafter (k3), so the drafter/reviewer separation is structural.
- **Verdict (recorded)**: *the amendment layer is ready; one blocking tool
  fix remains before merge.*
- **Disposition status**: all findings FIXED in `8cb5285`; confirmed by the
  founder on merge (pre-trust-root authority, per the README).

## Findings and dispositions

| # | Severity | Finding | Disposition |
|---|---|---|---|
| 1 | BLOCKING | Threshold counted signature entries, not distinct keys — one key's entry duplicated twice met 2-of-3 | FIXED |
| 2 | LOW (nit) | Subject sanitization collided (`a/b.md` ≡ `a-b.md`) — silent last-sign-wins | FIXED |
| 3 | DOC | Amendment's custody wording lagged the tool (manifest guard; rotation "recorded by hand") | APPLIED |
| 4 | DOC | Nothing stated what pins `keyring.json` itself | APPLIED |

### Finding 1 — blocking: entries, not distinct keys (FIXED)

**Formal.** `cmdVerify` incremented a counter per *valid signature entry*;
`isSigFile` accepted repeated `keyId`s. Replacing the sig file's
`signatures` array with one key's valid entry duplicated twice printed
"verify OK … 2 valid signature(s) meet threshold 2-of-3", exit 0 — one key
satisfied a 2-of-3 threshold. Reproduced by the reviewer and independently
by the drafter at `2e111fa`. The sig file is attacker-controlled input in
exactly the tamper-at-boot scenario the tool exists to exercise, and the
loop is the reference k-of-n implementation runtimes will pattern-match.

**Fix** (`8cb5285`, both layers the reviewer suggested): `isSigFile` (and
`isKeyring`, same defect class) refuse duplicate key IDs as malformed with
a named reason; `cmdVerify` counts a `Set` of verified key IDs — the
reference semantics, kept in the loop because that is the code runtimes
will copy. The duplicate-entry case is added to the PR's evidence matrix.

**Plain form (§5.1).** The practice seal requires "any 2 of the 3 practice
keys." The checker was counting *stamps on the page*, not *distinct people
stamping* — so one key stamping twice looked like two signers. *Worked
example:* an attacker takes the real seal file, deletes two of the three
signatures (honestly sub-threshold: 1-of-3, correctly refused), then
copies the remaining one and pastes it twice. No cryptography broken, no
key stolen — just arithmetic abused: two entries, one signer. Before the
fix, the tool accepted it; now the file is refused as malformed on sight,
and the counting loop itself only ever counts each key once — the same
rule as a club vote: "two members must sign" is not met by one member
signing twice.

### Finding 2 — nit: subject collision, silent overwrite (FIXED)

**Formal.** The sig-artifact subject was the target path with
`[^a-z0-9]+` collapsed to `-`, so `a/b.md` and `a-b.md` shared one
subject and one artifact path; a second `sign` silently replaced the
first. Not a forgery (the message binds subject+digest; `source` records
the file) but a silent-overwrite confusion hazard.

**Fix** (`8cb5285`): the subject is the verbatim relative path
(`compact.md` keeps its historical `compact-body`); artifact filenames
encode `/` as `__`; and `sign` refuses to overwrite an existing artifact
whose recorded `source` differs — collisions fail loudly, never silently.
Tested live: `zzcol/one.md` signs, `zzcol__one.md` is refused, the first
artifact still verifies.

**Plain form.** Two different files could end up sharing one seal file,
and sealing the second would quietly throw away the first's seal — like
two tenants with similar names receiving each other's mail. *Worked
example:* sealing `docs/law.md` then `docs-law.md` used to overwrite one
artifact; now the tool says "this artifact belongs to a different file"
and stops until someone deletes it deliberately.

### Findings 3–4 — documentation (APPLIED)

- Amendment 0004 posture §5 now reads "refuses to overwrite existing keys
  **or the committed manifest** without `--force`" and "the rotation is
  recorded **by hand** in the manifest" — matching the tool as hardened.
- `keyring/dev/README.md` rule 5: **the manifest is not self-certified** —
  nothing signs `keyring.json`; its authenticity is the repository's (git
  history plus founder custody), and it must not be mistaken for its own
  proof.

## Confirmed defenses (recorded, not reopened)

The reviewer independently verified, on a scratch clone with the working
tree untouched: CI green (`lint_draft.py`, `smoke_app.js`); `verify`
passes 3-of-3 on a keyless clone (verification needs only public
material); the committed sig file's digest matches `sha256sum compact.md`
exactly; every cited clause exists and supports the claim attached to it
(A-1's distinct-keyholder threshold, J-1's self-judgment bar, D-8, I-8,
F-5, A-5); FOUNDING §5.1 is satisfied with the formal and plain forms in
agreement; and the Copilot remediation (`2e111fa`) works as claimed
(manifest-overwrite refusal on a keyless clone, traversal refusal, clean
shape refusal on a malformed sig file, `fileURLToPath` root resolution).

The reviewer also recorded, relative to the Copilot pass: Copilot's four
findings were real and fixed, but it under-ranked the manifest-overwrite
guard and missed the distinct-key threshold defect — the only finding
touching the amendment's core purpose, k-of-n verification correctness.

## Dissents

None recorded. The findings were implementation defects, not disagreement
with the adopted posture; the reviewer's verdict affirmed the amendment
layer.
