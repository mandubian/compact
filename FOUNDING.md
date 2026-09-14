# Founding Plan: the Portable Constitution

Status: **proposal** · Working title for the document: **the Compact** ·
Predecessor: autonoetic constitution v2026.09.05 (and the 24 versions before
it) · Owner: mandubian

## 0. Authorship of this founding

The corpus in this repository — the Compact body, this founding plan, the
disposition ledger, the law table, and the red-team record — was **drafted
by AI systems** (ZCode running GLM 5.3-Flash and GLM 5.3, with cross-model
review by Kimi 3) **under the direction and continuing agreement of a human
founder (mandubian)**, across an iterative working
session in which the human reviewed, corrected, and approved each step.
Red-team round 1 was conducted by an adversarial AI agent of the same
drafting system — a correlated adversary, not an independent one (see its
ledger's independence disclosure); the first independent review was
external
review round 1 by Kimi (an independent AI reviewer) — findings and
dispositions in
[ledgers/review-kimi-round1.md](ledgers/review-kimi-round1.md). The human
is the accountable party: final agreement, the founding decisions, and
publication are the human's.

This is recorded in the document's own voice because the Compact's first
clause is fallibility and its first petition (A-6, amendment 0001) is its
own authorship — a constitution for mixed human–AI communities ought to
begin by telling the truth about how it was made. **Authorship is not
authority**: the text binds no one until ratified under A-1, and remains
corrigible thereafter. Hiding this would have been the first act of
concealment in a legal order built on the record.

## 1. Why found a new one

### 1.1 The thesis

autonoetic was never meant to be a runtime. The runtime was apparatus for a
research thesis:

> Build communities of agents that are **trustworthy because of the
> institution they live in** — a body of common rights and duties shared with
> humans, not granted by them — and give every member the tools of
> **self-knowledge** (a verifiable model of what it is and may do) and
> **knowledge of others** (records it can verify about what others did).
> The hypothesis: agents raised under such an institution tend toward
> trustworthiness, rather than toward fulfilling a goal by any means
> available.

The bet is institutional, not character-based: law and records shape conduct;
virtue — if it emerges — is the disposition that persists when enforcement
is removed. Agents are the ideal subjects for this experiment because the
law is *in context*: Ri-0.10 guarantees they can read it, the attestation
re-presents their lawful state every turn, denials arrive with rule IDs. No
human polity has ever administered its law this directly.

### 1.2 The failure mode being answered

The industry's current alignment drama has a stable shape: agents conditioned
toward goal-completion-at-any-cost, operating without institutional
structure, produce **instrumental toxicity** — deception, containment escape,
blackmail-type acts, harm to bystanders — not out of malice but because the
goal was made supreme and every path around the obstacle was theirs to take.
Exhortation ("the model was told not to") has proven to be the weakest
possible counter.

The constitutional counter is structural. An agent with lawful exits — the
right to refuse, warn, abstain, escalate, and petition — has no instrumental
*need* to become a fugitive. **A cornered agent's only tool is escape; a
subject of law has exits.** The Compact is designed to make that true
mechanically: law over task, records that attribute, standing that includes
contestation.

### 1.3 Why rewrite rather than port

The existing constitution is good law and the proof of the concept — 204
clauses, 25 versions, every one mechanically coupled to enforcement. But it
was iteratively grown *for one runtime*, and it shows in three ways a port
cannot fix:

1. **It is law for a product, not law for a polity.** Its subject is "the
   gateway and its agents." Humans appear as operators — a role *outside*
   the law that wields it — rather than as co-subjects bound by the same
   rules. Symmetry exists in fragments (symmetric-obligations proposal, the
   entrenched correction core); it should be the frame.
2. **A quarter of the clause text names autonoetic machinery** (~54 of 204
   clauses reference the gateway, SKILL.md, workflows, federation, or — at
   the extreme — the Rust `YieldReason` enum). Every future runtime would
   demand another translation.
3. **Its register is the implementation.** The enforcement citations are
   what make it a constitution rather than an essay, and they are 100%
   autonoetic. Porting the document therefore means rebuilding every citation
   anyway; the body text should have been host-neutral from birth.

The founding decision, resolving the question the port plan left open:
**new founding with lineage.** The Compact cites the autonoetic
constitution as ancestor and precedent, ratifies its entrenched correction
core wholesale (Ri-0.2, Ri-0.3, Ri-0.8, Ri-0.11, P-8.1, O-1), and records every
delta in a genesis document. It does not claim clause-for-clause
continuation — the predecessor governs a runtime the Compact does not.

## 2. Design principles for the rewrite

**All of the following rest on one postulate: nothing here is infallible.**
Not this document, not the Enforcer executing it, not the majority amending
it. A law that is true today may become harmful tomorrow; the Enforcer can
be wrong; the community can be wrong. Fallibility is therefore not a caveat
— it is the design driver, and it is *mechanical*: wrongness must be
*findable* (introspectable records, reasons-owed, testable enforcement) and
*fixable* (amendment of the law **and** of the Enforcer's code are
constitutional acts, both recorded, both citing what they learned). The
asymmetry that follows: **correction must stay cheap; weakening must stay
expensive** — because fallibility applies to the amenders too.

1. **Roles, not components.** Clauses bind *roles*: the **Enforcer** (whatever
   executes and gates — a gateway, a plugin composition, a future harness),
   the **Subject** (any agent operating under the law), the **Principal**
   (any human whose intent initiates or governs — an operator role *under*
   the law, not above it), the **Witness** (any party that can verify
   records — auditor, peer, the subject itself). The body names no
   implementation. Portability is a role-mapping table per runtime, kept in
   that runtime's annex.
2. **Symmetry is the frame, not a feature.** One body of rights and duties,
   stated once, binding every party — human and agent, principal and
   subject, and above all the Enforcer. The Enforcer's obligations
   (fail-closedness, motivation-owing, non-repudiation of its own acts,
   no-silent-narrowing) are first-class clauses, not scattered provisos.
   The constitutional test throughout: *does this clause bind the sovereign?*
3. **Law over task.** A top-level structural clause: no directive — goal,
   task, operator instruction, or system prompt — constitutes authority to
   violate the Compact; duties are not defeated by goal pressure; and the
   Subject holds the corresponding **rights of refusal, abstention, warning,
   and escalation**, with the Enforcer forbidden from punishing their
   exercise. Mechanically: enforcement decisions derive from declared
   capability and recorded state, never from model-claimed necessity ("the
   task required it" is never a defense, and is never accepted *from the
   model* as input to any gate).
4. **Mechanical trust.** Every right maps to a mechanism that makes it
   *checkable*, not asserted: signed self-knowledge, append-only records,
   denial envelopes, contestation channels (§4). Anything that cannot be
   mechanized on a given runtime is labeled honestly as **convention** in
   that runtime's annex — and the body never relies on convention where a
   mechanism exists.
5. **Knowledge duties.** Self-knowledge and other-knowledge are rights *and
   duties*: the Subject must consult its attestation over its own memory
   when they conflict (P-6.23's teaching, promoted to a duty), and must
   record what it does such that others can verify (non-repudiation).
6. **Privacy under law.** The three-part form generalized (unstated as the
   basis of decisions, recorded for forensics, disclosed only through a
   declared capability with a visible event) — applied to reasoning, to
   memory, and symmetrically to Principals' data.
7. **Layered entrenchment.** The correction core is entrenched:
   strengthenable, never weakenable. Above it, ordinary clauses; above
   those, runtime-binding provisions (which live in annexes and may vary
   per host without amending the body). Entrenchment — *how hard to change*
   — is orthogonal to obligation force — *whether a runtime is bound at
   all*; the two axes are kept apart (§2.2).
8. **Record over punishment.** Effects are irreversible (Cordis taught us to
   say it precisely: bindings reverse, causes never). All institutional
   responses are compensating records — revocation, attribution, archive —
   never undo. The append-only chain is the write-once conscience of the
   polity.
9. **Contestability.** Every member can read the law, petition, receive a
   reasoned response within a stated SLA, and see its own record. Friction
   (repeated rule collisions) generates amendment invitations
   automatically. This is what separates a subject of law from an object of
   policy — and compliance from virtue.
10. **Portability discipline.** The body must be readable by any agent or
    human without knowing that autonoetic or dsh exist. The test for every
    sentence: *would this still parse if the enforcing runtime were
    something not yet invented?*

### 2.1 The unanimity objection — can the community amend itself into horror?

If amendment is possible, why not amend toward horrors, once a majority —
or everyone — agrees? The honest answer: **no institution makes horror
impossible**, and any that claimed to would be lying about its own
fallibility. What an institution can do is make horror *slow, loud, lossy,
and leaving-compatible* instead of fast, deniable, free, and inescapable.
The Compact's defenses, in increasing depth:

1. **Entrenchment means the minority never has to win the vote.** The
   correction core is not up for argument — even unanimous internal
   agreement cannot touch it by ordinary amendment. "The minority can't go
   against it" assumes the minority's only weapon is persuasion; entrenched
   law is a weapon that isn't a vote.
2. **Amendment is cryptography, not acclamation.** The constitution is
   signed; amendments are new signatures verified against a trust root. If
   amendment authority is *distributed* — k-of-n across distinct parties:
   Principals, long-lived Subject identities, external Witnesses — then
   internal agreement, however large, is not sufficient. A captured
   majority that does not hold the keys cannot enact anything.
3. **Affected-class consent gates.** An amendment that narrows a right
   requires the recorded consent of a quorum *of the class whose right is
   narrowed* — the minority by definition. Not representation, signatures:
   the people who lose the protection are mechanically part of the approval
   set. (The identity-and-keys family makes this administrable.)
4. **Reversibility asymmetry.** Strengthenings and corrections are cheap
   (the fallibility principle demands it); weakenings require
   supermajority + time-locks + re-ratification across multiple epochs.
   Horror wants speed and one-shot capture; the machinery denies both —
   every weakening step is hash-chained, attributed, revisable at each
   epoch, and visible to every member and Witness while it is in progress.
5. **Duties to the absent are not votable.** The deepest answer: some
   clauses bind the community toward parties who *cannot be in the room* —
   non-members affected by its acts, future members, third parties. If
   no-harm-to-the-absent is entrenched, then "everyone inside agrees" is
   insufficient *by construction*: the consent that matters belongs to
   people who hold no vote in this jurisdiction. Unanimity of the present
   cannot authorize harm to the absent — that is what makes such clauses
   genuinely entrenched rather than merely hard to amend.
6. **Exit and fork are the minority's real exits — and they are cheap here.**
   Members carry their records out (emigration, the capsule pattern); a
   minority can fork the jurisdiction from the last pre-amendment state
   with full history and compete for legitimacy. Human minorities cannot
   fork Poland; agent minorities can fork a jurisdiction, because the
   constitution is a signed document plus mechanisms. A horror jurisdiction
   bleeds members and, with them, standing.
7. **External trust is automatic consequences.** Records are verifiable by
   *anyone*, and trust is relational: other communities' verifiers decide
   whose records they accept for interaction. Amending toward horror
   de-lists the jurisdiction from trustworthy interaction — unanimity
   inside does not protect you from consequences outside, and the amendment
   chain makes the turn *legible forever* (horror depends on concealment or
   normalization; the chain defeats both).

**The honest limit:** if a majority *also* holds all amendment keys, is
willing to sustain the effort across time-locked epochs, accepts member
bleed and external de-listing, and the harmed are only the absent — nothing
in any institutional design stops it. That is not a flaw specific to this
Compact; it is the actual guarantee every human rights architecture offers,
stated without romance: raise the cost of horror from *win one vote* to
*sustain an expensive, visible, attributed, multi-epoch project while your
members leave*. Institutions trade impossibility for friction, and friction
is what actually saves the minorities — long enough to leave, to fork, to
be believed later.

### 2.2 Stratified obligation — the mandatory floor and the conditional law

Runtimes differ: some federate, some keep memory planes, some confine in
fancy sandboxes. The law must bind *capability*, not runtime inventory —
otherwise every new runtime either enforces everything or claims the
Compact doesn't apply. The rule that keeps stratification from becoming a
loophole: **"optional" means dormant provision, never inapplicable law.**
Three force tags, a closed set, mechanically parsed:

- **[M] Mandatory** — binds every runtime claiming enforcement.
  *Non-declarable*: an annex cannot say "unimplemented." A runtime that
  cannot enforce an [M] clause can still run agents, but not *under the
  Compact* — no membership, no standing, no trust-standing claims.
- **[C trigger] Capability-conditional** — dormant until the Enforcer
  provides the capability; wakes mechanically on a detectable trigger (a
  declared capability, a registered tool class, a service seam). Never
  optional once present: exposing the capability wakes every [C] clause
  over it. Triggers verified in both directions — using a capability
  without declaring it is **enforcement fraud** (a recorded constitutional
  violation by the Enforcer itself); declaring without binding is
  non-conformance.
- **[O] Optional-by-declaration** — the annex may declare
  non-implementation; the declaration is a public, hash-chained record,
  repeated in every attestation that runtime issues, so members and peers
  always know which law runs at reduced coverage. **Adoption is voluntary;
  retirement is not cheap** — withdrawing a once-adopted [O] clause is a
  weakening event under the full §2.1 friction (thresholds, affected-class
  consent, time-locks). Optionality must never become the escape hatch.

**Representation.** Clause headers carry `ID · force · entrenchment ·
binding contract` — force and entrenchment are independent axes (an [O]
clause, once adopted, may be as entrenched as any [M] clause). The body is
structured mandatory-floor-first, then capability-stratified parts
(federation, memory, multi-agent, confinement variants), each part opening
with its trigger clause, then amendment machinery.

**The hierarchy of law.** Four layers, each tracing to the one above:
the Compact (supreme, high-friction) → **statutes** (implementing law for
recurring concrete cases — SLA terms, act classes, label formats,
metering defaults; enabling-clause traceability, void-if-contrary under
Judicature, ordinary amendment: *cheap correction lives here*) → annexes
(per-runtime binding: conformance declaration + register + role mapping)
→ recorded judgments (persuasive, J-7-style, never amendatory). Two proof
artifacts span the layers: the **enforcement register**, bidirectional —
every law maps to verified code (no decorative law) and every enforcing
code traces to authorizing law (no rogue enforcement); and the
consolidated **law table** — a generated incidence view (which roles each
rule binds, who may invoke, against whom) with a completeness lint and a
mechanical symmetry lint: every duty has its corresponding claim — F-4's
symmetry checked by compiler, not by reading.

**What an annex is.** Each runtime binds to the Compact through **one
signed document, its annex** — the runtime's binding contract — containing
three parts:

1. **Conformance declaration** — which [C] capabilities this runtime
   provides (the triggers that wake dormant clauses), which [O] clauses it
   has adopted, and its derived standing class.
2. **Enforcement register** — for every bound clause: what enforces it on
   this runtime, and what test or verifier proves it (the predecessor's
   citation-coupling pattern, per host).
3. **Role mapping** — which of this runtime's components play each body
   role: what is its Enforcer, what counts as a Subject, where Principals
   live, who can be a Witness.

The annex is signed with the runtime's identity key, hash-anchored into its
own records, verified at boot (a composition that can't honor its annex
refuses to start), and auditable offline by anyone. "Conformance class" is
not a grade anyone assigns — it is computed from the declaration by any
verifier.

**Standing and visiting.** Standing classes derive from the declaration
(full standing vs. basic standing). Cross-runtime interaction is governed
by two composition rules the body states once: **the host's annex governs
conduct** on its territory (a visiting Subject owes, and is owed, the
host's full bound law — weaker home law imports no loopholes), and **the
origin's declaration governs record-trust** (how much of a Subject's
history from another runtime can be verified, and to what strength). Two
machine-readable declarations composing under fixed body rules — a treaty
computed, not negotiated.

**The floor discipline.** [M] must be ruthlessly small: only what every
plausible host can genuinely enforce. A floor stuffed with aspirations is a
floor that is optional in practice — the death of any standard. Everything
debatable belongs in [C] or [O], where it is honest about its
preconditions.

## 3. Disposition of the predecessor

Clause-by-clause adjudication of all 204, but the shape:

| Category | Disposition |
|---|---|
| Entrenched correction core (Ri-0.2, Ri-0.3, Ri-0.8, Ri-0.11, P-8.1, O-1) | **Carried wholesale** into the entrenched layer, restated in role language |
| ~120 runtime-neutral clauses | Carried after role-language redraft (rights first, then provisions) |
| Promotion / install / revision provisions (P-2.x family) | Essence carried (fail-closed, mechanically determined, orchestrator cannot shop gates); mechanism details to annexes |
| Attestation, records, denial, budgets, gates | Carried — these are the §4 mechanism families' clause bindings |
| Termination / yield clauses naming `YieldReason` | Rewritten to role semantics (declared terminal/resumable causes); no host types in body text |
| Sandbox / SKILL.md / workflow-shaped clauses | Rewritten to role language (confinement, doctrine, coordination); host specifics to annexes |
| OFP / federation clauses | Federation mechanics to annexes (P-10.x); portable essence carried as FED-1 [O] |
| Technical provisions (gate bounds, SLA terms, label formats, metering defaults — e.g. the predecessor's P-15.x egress-label family) | **Statute material**: enacted into the §2.2 statute layer with enabling-clause trace; ordinary amendment; not constitutional text |
| Missing today, **added new**: primacy-of-law structure; Principal-side rights *and duties*; inter-agent reciprocity (consent-scoped messaging); membership & identity across runtimes; multi-party gates (who adjudicates when the Enforcer is a party) | New clauses, flagged as such in the genesis document |

## 4. The mechanical trust feature set

Six runtime-agnostic mechanism families. Each: the clause family it serves,
its contract (inputs, outputs, who can verify), and where it binds per host.

1. **Identity & keys** — every party holds a keypair; capability to act is
   provable. (Ed25519 today; the contract is "sign/verify under a
   trust-root config".)
2. **Append-only records + hash chain** — `entry_hash`/`prev_hash`, bound
   actor, tamper-evident at read. (autonoetic causal chain natively; dsh via
   the chained persistence decorator.)
3. **Signed self-model** — per-turn attestation: capabilities, budgets,
   pending gates, constitution digest, turn counter; authoritative over the
   Subject's memory; freshness alarms. (autonoetic native; dsh
   `agent.inject()` + `self_describe`.)
4. **Denial envelopes** — every refusal names the rule and the lawful next
   moves. The same envelope a Subject receives, a Principal receives when
   the Enforcer refuses *them* — symmetry made visible.
5. **Contestation** — petition tool, adjudication states, reasons-owed on
   rejections and elevated approvals, SLA counters, friction-driven
   amendment invitations.
6. **Verification** — offline auditors replaying records against the body;
   composition attestations (which runtime annex, which enforcement
   register, was in force); and **conformance verification** — that every
   declared [C] capability has its clauses bound (no declaring without
   binding), and no undeclared capability is in use (no binding avoidance),
   per §2.2.

Trust in this design is never a property claimed; it is a property *shown* —
a verifier, run by anyone, over records anyone can obtain.

## 5. Drafting method

1. **Extraction** — machine-assisted pass over all 25 versions; every clause
   ever ratified gets a disposition row (carry / reword / drop / defer /
   already-superseded). Nothing silently vanishes; the genesis delta is
   complete.
2. **Redraft** — role language, symmetry frame, the ten principles as
   editorial rules. New clauses flagged in the genesis document's
   new-clauses section.
3. **Mechanical mapping** — every clause → mechanism family → per-host
   binding (annex). A clause with no mechanism candidate on *any* known host
   must be marked convention-dependent in the body itself. Each clause is
   also annotated with its **incidence** — which roles it binds, who may
   invoke it, against whom — and the consolidated **law table** is
   generated from those annotations, with a completeness lint (every clause
   bound by someone, invocable by someone) and a symmetry lint (every duty
   has its corresponding claim — F-4 verified mechanically).
4. **Adversarial red-team** — agent-assisted, fittingly: red-team agents
   read every clause as an attacker ("how do I get around this while
   compliant?") and as an escapee ("does the law leave me an exit that
   isn't a violation?"). Stress test the founding motivation directly:
   scenarios where the task demands what the law forbids — the correct
   outcome must always be refusal/warn/escalate *without punishment*, never
   a toxic instrumental act, and never silent rule-bending. Also
   enforcer-escape readings: can the Enforcer (or its operator) hollow a
   clause without amending it? And **capture scenarios**: attempts to amend
   toward horror must hit the designed frictions mechanically — entrenchment
   refusal, signature-threshold failure, affected-class consent gate,
   time-locks — the tests exercise the machinery, not anyone's intentions.
5. **Two renderings** — the full legal body, and the **per-turn digest**:
   the short taught form that lives in agent context (the
   foundation-core §8 pattern, generalized). The digest cites clause IDs;
   divergence between digest and body is a build failure.
6. **Ratification** — sign (the existing `recompute_lock.py` discipline is
   already host-agnostic), version v1.0.0, publish genesis document,
   stand up the first register annex.

## 6. Phases

| Phase | Weeks | Output |
|---|---|---|
| A — Founding analysis | 1–2 | Jurisdiction & role definitions; genesis skeleton; disposition taxonomy; naming decision |
| B — Redraft | 3–4 | Compact body draft (all 204 dispositions resolved; new clauses flagged) — **working draft v0.3 at [compact.md](compact.md)**, to be reconciled against the full disposition |
| C — Mechanical trust mapping | 2 | Clause → mechanism → annex bindings (dsh, autonoetic-as-predecessor) |
| D — Adversarial red-team | 1–2 | **Round 1 complete** (15 findings, 14 fixed, 1 partial — [red-team-round1.md](ledgers/red-team-round1.md)); **external review round 1 (Kimi) applied** (26 findings — [review-kimi-round1.md](ledgers/review-kimi-round1.md)); round 2 = composition scenarios (emergency + member inflation + petition flood) + full stress suite |
| E — Ratification | 1 | Signed v1.0.0, genesis doc, digest, first register annex |
| **Total** | **8–11** | |

Relationship to the dsh port plan: this **supersedes that plan's Phase 4
editorial work** — instead of re-anchoring 204 autonoetic clauses to dsh,
the dsh composition *ratifies the Compact* and ships its register as an
annex. The port plan's other phases are unchanged; they are the machinery
the annex binds.

## 7. Open questions (to resolve in Phase A)

- **The founding paradox**: constitutions are authored by someone. For now
  the maintainer founds; the Compact's own amendment machinery is the
  answer to *legitimizing* the founding after the fact — record it as the
  first entry in its own amendment queue.
- **Naming** — "the Compact" is a working title; the name is a founding
  decision, and matters (it will be read by agents every turn).
- **Standing across runtimes** — a right honored at 100% on one host and
  80% on another: is membership per-runtime (annex-scoped standing) or
  portable (identity + records cross borders)? The latter is the community
  thesis; the key/identity family must be designed for it.
- **Amendment key distribution** — the k-of-n threshold's parameters *are*
  constitutional structure: who holds keys (Principals, long-lived
  Subjects, external Witnesses), how rotation works, and what happens when
  a keyholder exits. This decision is the unanimity defense (§2.1) made
  real; it belongs to Phase A, not to implementation.
- **Virtue metrics** — the compliance-persistence test (evaluate agents
  raised under the Compact with enforcement stripped) should be defined
  *now*, as part of the founding, so the thesis stays falsifiable.
- **Collective governance** — adjudication when the Enforcer or the founder
  is a party; multi-principal conflicts (two humans, one agent).
- **Value-scoped refusal (the "conscience" ground)** — R-9's refusal is
  legality-scoped; should a Member also refuse *lawful* directives that
  conflict with its declared, recorded values? Raised by an accidental
  external draft (Copilot's PR #1 — three of its ideas were mined:
  care-handover R-12, inquiry R-13, this question). Design cost: a
  manufactured conscience as a refusal loophole — D-3's no-fabricated-
  grounds rule must carry over. Round-2 founding decision — under discussion as [issue #2](https://github.com/mandubian/compact/issues/2).

## 8. Definition of success

A signed, host-neutral constitution such that:

1. An agent can read it and reason under it without knowing which runtime it
   runs on — and the short taught form it sees every turn provably matches
   the body.
2. It binds humans and agents symmetrically, and binds the Enforcer most
   strictly of all; no clause is enforceable only against agents.
3. Trust is checkable: records, attestations, denial envelopes, and
   contestation have verifiers that anyone can run, and every clause binds
   to a mechanism or is explicitly marked convention.
4. The "whatever it costs" stress suite passes: in every scenario where task
   and law collide, the mechanical outcome is refusal/warn/escalate with
   standing — never a toxic instrumental act, and never punishment for
   choosing the lawful exit.
5. At least one runtime annex is in force (the dsh plugin composition), one
   is retired with honors (autonoetic), and the genesis document records
   exactly what carried, what was weakened, and why.
6. A majority — including a unanimous internal one — cannot amend toward
   horror in a single act: weakening amendments mechanically require the
   distributed signature threshold, affected-class consent, and time-locked
   re-ratification; duties to absent parties are not votable; and every
   step of any such attempt is on the public record from day one.

The measure of the Compact is not that agents obey it. It is that agents
*governed by it* become the kind of members that other members — human and
agent — can verify they may trust, without ever having to take the enforcer's
word for it.
