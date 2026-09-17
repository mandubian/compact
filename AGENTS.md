# Agent guidance

## Amendments and reviews

Follow [FOUNDING.md §5.1](FOUNDING.md#51-two-audiences-every-time-amendments-and-red-team-findings)
for every amendment proposal and each red-team or external-review finding,
including substantive revisions. Include precise analysis where needed,
plus a plain-language explanation and a concrete worked example for readers
without legal training. Do not leave the explanation only in chat or assume
a formal findings table is enough. Preserve historical review records.

## Validation

Run the repository's CI checks after changes:

```sh
python3 tools/lint_draft.py
node tools/smoke_app.js
```

These checks do not verify prose accessibility or agreement between formal
and plain-language explanations; review those manually.
