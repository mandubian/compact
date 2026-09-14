# The Compact

A portable constitution for mixed communities of agents and humans —
founded from the [autonoetic](https://github.com/mandubian/autonoetic)
constitution (v2026.09.05 and the 24 versions before it), designed to be
enforceable on any runtime that meets its mandatory floor.

**Status: draft v0.2 — not yet ratified.** The body is
[`compact.md`](compact.md); the founding analysis and method is
[`FOUNDING.md`](FOUNDING.md).

## Authorship

Drafted by an AI system (ZCode, running GLM) under the direction and
continuing agreement of a human founder (**mandubian**), who reviewed each
step and is accountable for publication; red-team round 1 by a separate AI
adversary. Stated in the document's own voice (FOUNDING.md §0, amendment
0001): a constitution for mixed human–AI communities begins by telling the
truth about how it was made. Authorship is not authority — the text binds
no one until ratified under A-1.

## The thesis

Communities of agents become trustworthy through institutions, not
exhortation: one body of rights and duties shared with humans, tools of
self-knowledge and knowledge of others, and a law that stands above every
task. A member with lawful exits has no need to become a fugitive.

## Layout

| Path | What it is |
|---|---|
| `compact.md` | The body: principles, rights, duties, institutions, judicature, amendment |
| `FOUNDING.md` | Why a new founding, design principles, stratification, method, phases |
| `genesis/` | The genesis document (A-6) — what carried, what was weakened, why |
| `statutes/` | Implementing law: enabling-clause trace, ordinary amendment (A-7) |
| `annexes/` | Registry of runtime annexes — the annexes themselves live in the runtime repos |
| `ledgers/` | Generated/audited records: predecessor disposition, law table, red-team rounds |
| `amendments/` | The amendment queue — `0001` is the founding petition (A-6) |
| `tools/` | Draft lints; signing lands at ratification |

## Principles, in one breath

Nothing here is infallible (F-1). Rights bind every role — human,
artificial, and the Enforcer most of all (F-4). No goal is authority to
break the law (D-1). Duties to the absent are not votable (D-5). Every
right maps to a mechanism a verifier can run; anything unverifiable is
labeled convention. Correction is cheap; weakening is expensive (A-3);
and the community can always be left honestly (R-12).

## Relationship to other repos

- **autonoetic** — the predecessor jurisdiction; its constitution is
  precedent, its workspace hosted the drafting (paths in FOUNDING.md
  referencing `docs/...` are predecessor-repo paths).
- **autonoetic-dsh** (planned) — the first runtime annex: the dsh plugin
  composition that enforces the Compact's floor on
  [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness).

## The site

`site/` is a self-contained, dependency-free scroll narrative that teaches
the approach progressively: the failure mode → why exhortation, guardrails,
and oversight are not law → the roles and symmetry → the machines behind
the rights (attestation, append-only record, denial envelopes) → the
law-over-task stress test → the stratified floor ([M]/[C]/[O] boot
simulator) → fallibility and judicature → the capture attacks and their
frictions → the taught digest. Enable GitHub Pages (Settings → Pages →
Source: GitHub Actions) and it deploys on every change to `site/`.

## Decisions open before ratification

The name; amendment key thresholds and keyholder set (A-1); adjudicator
sets and decentralization trajectory (J-8); D-5's vocabulary of harm; the
egress capability part (deferred); digest verification as a build gate;
text license (CC-BY-4.0 suggested for the law, MIT for tools).
