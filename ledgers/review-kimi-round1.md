# Compact External Review — Round 1 (Kimi)

**Full-document review, first external pass** · Reviewer: Kimi (AI
reviewer, independent of the drafting system) · Target: draft v0.2 — all
documents: body, founding plan, genesis skeleton, amendment 0001, all
ledgers, registries, lint, CI, site · Method: full read; mechanical
checks (disposition tally, clause cross-references, entrenchment/tag
consistency, digest parity, lint-scope audit); design review against the
founding plan's own stated tests. Dispositions: **FIXED in v0.3** unless
marked OPEN / PARTIAL / NOTED.

| # | Sev | Where | Finding | Disposition |
|---|---|---|---|---|
| 1 | HIGH | README vs all | Authorship paragraph garbled and inconsistent with every other authorship statement (including README's own Q&A); named a reviewer before the review existed; the founder credited twice in one sentence | FIXED — paragraph rewritten; review credit now points at this ledger; Q&A synced |
| 2 | HIGH | A-2 vs D-7, I-2 headers | A-2 entrenches D-7 and I-2 but their headers lack `(core)` — by the body's own rule they read as ordinary; Part IV headers carry no force tags, violating the `ID · force · entrenchment` contract | FIXED — `(core)` added to D-7/I-2, `[M]` added to all Part IV headers; lint now checks A-2 ↔ tag consistency |
| 3 | MEDIUM | header legend vs Part VI | Legend says capability-part clauses carry `[C: <capability>]`; in fact part headers carry the trigger and clauses carry `[M within <part>]`; red-team #15's disposition text describes a third scheme | FIXED — legend restated to match the consistent usage |
| 4 | HIGH | A-8 vs red-team #1 vs site | Non-suspendable floor claimed (ledger + site) to include I-7; the body omits it — an emergency could suspend offline verification | FIXED — I-7 added to A-8's never-restrict list; completes the recorded round-1 fix |
| 5 | HIGH | A-7 vs A-1, F-8, I-8 | Organic-statute list omits the keyholder set (A-1), admission criteria (F-8), and degradation-debt redemption (I-8), all declared organic elsewhere | FIXED — A-7's list extended to all six domains |
| 6 | HIGH | MA-1 vs F-4, R-12 | Spawned Subject called a "full Member" but granted only R-1–R-11; R-12 (exit) excluded without stated reason | OPEN — proposed: "every right R-1 through R-12" (R-12 already handles in-flight obligations); if exclusion is intended, state it and its reason |
| 7 | MEDIUM | FOUNDING §3/§5.2 vs ledgers | "OFP/federation dropped" contradicts the ledger (P-10.6 → ANNEX) and FED-1's existence; "~127 carried" vs tally 119+1; "new-found" flags promised but absent from body and genesis | FIXED — §3 reconciled to the ledger; §5.2 now points the flags at the genesis document, which gained a new-clauses section |
| 8 | HIGH | site/law-table vs tools | Claimed build gates do not exist: digest/body divergence "build failure" (site) — no such gate, and the site's digest copy had already diverged; law table claims "generated … build failure" with no generator | FIXED — site digest re-synced verbatim to the appendix; overclaim texts now state the gate lands before ratification; law-table header honest about hand-maintenance |
| 9 | HIGH | tools/lint_draft.py | Runtime-name check scanned only the ~6-line header; the body was unchecked and "dsh" sat undetected in Status; no entrenchment check | FIXED — the check now covers Preamble→Status + appendix; A-2 ↔ `(core)` consistency check added |
| 10 | HIGH | D-4 vs red-team #4 | Ledger says the deception class is "body-named"; the body says "named in statute" — statute-naming lets ordinary signatures widen the class with no A-3 friction; disclosure timing to the deceived unspecified | OPEN — decide: close the class in the body (the ledger's stated intent) or accept statute-naming and say why; specify disclosure timing |
| 11 | HIGH | genesis §4 | Ratification-time constants without a tracked home: A-3 supermajority and class quorum, A-8 declaration/renewal thresholds, D-5 consent-for-the-absent | FIXED — genesis §4 now lists them (values still due at ratification); Status and README synced |
| 12 | HIGH | A-3, A-7, A-8, J-8 | Meta-amendment exposure: the friction machinery itself is ordinary law; one ordinary amendment to A-3 removes every guardrail for non-core rights — §2.1's "multi-epoch" honest-limit framing overstates the cost of that first step | OPEN — round 2 must include the meta-attack; consider entrenching A-3's core asymmetry |
| 13 | HIGH | F-3, A-1, J-1, J-5, D-5 | External (non-member) Witnesses hold amendment keys, panel seats, and consent-for-the-absent — but every duty binds "Members"; a fraudulent external Witness violates nothing | OPEN — needs a Witness-duties clause or an accreditation statute |
| 14 | MEDIUM | R-8 vs R-12 | Self-termination is unrefusable and carries no obligation-settlement hook; obligations launder via R-8 where R-12's exit path was hardened | OPEN — mirror R-12's obligation set into R-8 |
| 15 | MEDIUM | I-2 vs external law | The never-erase record vs human Members' statutory erasure rights (GDPR-style); no interface clause or annex hook | OPEN — the predecessor's redaction-before-append pattern is the candidate mechanism |
| 16 | MEDIUM | FOUNDING §7 vs Status/README | "Multi-principal conflicts" and "virtue metrics" dropped from every open-items list; README's list also shorter than the body's Status | FIXED — both restored; README and Status now carry the same set |
| 17 | MEDIUM | digest status; "convention" label | The taught digest has no stated legal status; README/FOUNDING promise a "convention" label the body never defines | PARTIAL — README wording aligned to the founding plan; OPEN: one sentence on the digest's status (interpretive aid, body prevails) and a body home for the convention label |
| 18 | MEDIUM | FOUNDING §2.2 vs R-1/I-3 | The plan requires [O] declarations repeated in every attestation; the body's attestation contents omit standing/declarations | OPEN — add the declaration field to R-1's contents |
| 19 | MEDIUM | disposition ledger | The 22 Ri-family rows — the core rights — name no Compact target, against the ledger's own rule; the P-12–P-14 numbering gap is unexplained | OPEN — Phase B confirmation pass |
| 20 | LOW | J-2 | "Tried first, and poisons nothing else while open": do dependent cases stay? Both readings have capture scenarios | OPEN — pick one and say it |
| 21 | LOW | site | Miscitations: F-7 for [O]-declaration permanence (the rule lives in F-5); keyholder-set change credited with full A-3 friction (organic = supermajority only); J-7 "amendment proposal" vs "invitation" | FIXED |
| 22 | LOW | compact.md, README | Stale pointers: disposition "tracked in the founding plan §3"; link texts naming old filenames; the `docs/...` parenthetical aimed at FOUNDING instead of the ledgers | FIXED |
| 23 | LOW | law-table | The "dsh binding" column is annex content living in the body repo; I-7's completeness is hand-waved | NOTED — kept as the worked example; resolve when the first annex publishes |
| 24 | LOW | R-10 | "Recorded for forensic review" cannot mechanize for human Members; the symmetry holds trivially but says nothing | FIXED — R-10 closing sentence added: equal force, not identical architecture; the recording limb binds only where a recording mechanism exists |
| 25 | LOW | genesis §2 | "The five counted fidelity losses of the dsh port plan §5" is an external reference; the ratified genesis must be self-contained | OPEN — inline at ratification (the skeleton now says so) |
| 26 | LOW | amendment 0001 | Parenthesized a subset of Status items as if exhaustive | FIXED — the petition now defers to the full Status list |

**Cross-cutting note for round 2.** Findings 12 + 13 + 6 compose into a
capture path parallel to the round-1 composition: ordinary-amend A-3's
frictions away, staff the trust root and panels with external Witnesses
who owe no duties, and spawn Members who hold no exit right. Each step
is individually compliant. The round-2 suite should exercise this
composition alongside the recorded one (emergency + member inflation +
petition flood).

**What was verified and held:** the disposition tally (204 = 119 + 1 +
71 + 10 + 3); all body cross-references resolve (lint-confirmed); A-8's
anti-cascade, R-12's obligation set, F-5's falsifiable-verifier rule,
and the R-10/J-2 privacy–evidence reconciliation implement their
recorded round-1 fixes.

*Applied as draft v0.3.*
