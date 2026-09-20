# Review ledger — amendment 0004 (development keyring), Copilot tooling pass

- **Reviewer**: GitHub Copilot pull-request reviewer (automated), four
  medium findings on `tools/sign_dev.mjs`, posted to PR #5 (2026-09-20).
  Scope: tooling robustness only — the constitutional surfaces were the
  GLM pass's domain ([review-0004-glm.md](review-0004-glm.md)).
- **Disposition status**: all findings FIXED in `2e111fa`; confirmed by
  the founder on merge. The full two-audience dispositions are also
  recorded in the PR thread.

## Findings and dispositions

| # | Severity | Finding | Disposition |
|---|---|---|---|
| 1 | MEDIUM | Repo root resolved via `import.meta.url.pathname` (URL-encoded/Windows-unsafe) | FIXED — `fileURLToPath` |
| 2 | MEDIUM | `generate` could overwrite the tracked keyring manifest when `private/` was absent | FIXED — guard covers both artifacts |
| 3 | MEDIUM | `sign`/`verify` admitted `..`/absolute paths escaping the repository root | FIXED — `resolveInRoot` confinement |
| 4 | MEDIUM | No shape check on the parsed signature file (opaque crash on malformed input) | FIXED — `loadJson` guard, applied to the manifest too |

### Finding 1 — root resolution (FIXED)

`.pathname` returns URL-encoded paths and mishandles Windows file URLs;
every seal path derives from the root, so a misresolved root corrupts
everything downstream. *Plain:* the tool finds the repository by reading
its own web-style address; on some machines that address contains codes
(`%20` for a space) that point it at the wrong folder. *Worked example:*
on a repo at `C:\My Projects\compact` the old code looked for
`My%20Projects`. Fixed by decoding with `fileURLToPath`.

### Finding 2 — manifest overwrite guard (FIXED)

The overwrite guard checked only `private/`; with the private keys moved
off-machine (normal custody), a bare `generate` would silently rewrite the
committed `keyring.json` — an unrecorded rotation invalidating the
published sig file. *Plain:* creating a new keyring must be a deliberate,
written-down event, but the tool only checked one half of the keyring
before replacing it. *Worked example:* the founder moves the secret keys
to a safe; anyone cloning the repo who types `generate` by habit silently
replaces the *public* manifest, and every seal anyone checked now fails
with no record of why. Fixed: `generate` refuses when either the keys or
the manifest exists, unless `--force`; tested in both states.

### Finding 3 — path traversal (FIXED)

`join(ROOT, target)` admitted `..` segments and absolute paths, letting
the tool read — and `sign` — files outside the repository root. *Plain:*
without a fence, a typo or malicious instruction could make the tool seal
any file on the computer. *Worked example:* `sign ../../etc/hostname`
previously sealed a system file with the founder's practice keys; now it
answers "path escapes the repository root" and stops. Both `..` and
absolute forms tested and refused.

### Finding 4 — malformed artifact handling (FIXED)

`verify` assumed the sig file's JSON shape; malformed input threw an
opaque exception instead of a clear refusal — and a crash is not a
verification posture. *Plain:* checking a seal means reading a small form;
if the form is garbled, the tool must say so, not fall over. *Worked
example:* a hand-edited seal file with half its fields deleted now gets
"malformed signature file: parsed but missing required fields — refusing
to proceed" instead of a stack trace. The same guard covers the keyring
manifest (same defect class). Both garbled-JSON and missing-fields cases
tested.

## Dissents

None recorded.
