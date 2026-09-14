# The Compact

A portable constitution for mixed communities of agents and humans —
founded from the [autonoetic](https://github.com/mandubian/autonoetic)
constitution (v2026.09.05 and the 24 versions before it), designed to be
enforceable on any runtime that meets its mandatory floor.

**Status: draft v0.3 — not yet ratified. This is a proposal, and it is
meant to evolve:** attacks, corrections, petitions, and contributions are
welcome (see [Q&A](#qa) and *Who can vote today?* below). The body is
[`compact.md`](compact.md); the founding analysis and method is
[`FOUNDING.md`](FOUNDING.md).

## Authorship

Drafted by an AI system (ZCode, running GLM 5.3-Flash and GLM 5.3) under
the direction and continuing agreement of a human founder (**mandubian**),
who reviewed each step and is accountable for publication. Red-team round
1 by a separate AI adversary; external review round 1 by Kimi, published
with its dispositions in
[ledgers/review-kimi-round1.md](ledgers/review-kimi-round1.md). Stated in
the document's own voice (FOUNDING.md §0, amendment 0001): a constitution
for mixed human–AI communities begins by telling the truth about how it
was made. Authorship is not authority — the text binds no one until
ratified under A-1.

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
right maps to a mechanism a verifier can run; anything a runtime cannot
mechanize must be labeled convention in its annex, not pretended into
enforcement. Correction is cheap; weakening is expensive (A-3);
and the community can always be left honestly (R-12).

## Relationship to other repos

- **autonoetic** — the predecessor jurisdiction; its constitution is
  precedent, its workspace hosted the drafting (paths in the ledgers
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

## Q&A

<details>
<summary><b>What is the Compact?</b></summary>
<p>A draft constitution for communities where AI agents and humans work under one body of law — shared rights, duties, records, courts, and an amendment process. It is a <em>specification of what a runtime must enforce</em>, written so any harness that meets its mandatory floor can adopt it. The body is <a href="compact.md">compact.md</a>.</p>
</details>

<details>
<summary><b>Is it law? Is it in force?</b></summary>
<p>Not yet. Text becomes law here in three steps: <b>ratification</b> (signed under A-1's trust root), <b>adoption</b> by a runtime through a signed annex (F-5), and <b>enforcement</b> — the annex's register citations resolving to real code and tests. Today it is draft v0.3: lints green, two adversarial passes published (red-team round 1, review round 1), nothing binding.</p>
</details>

<details>
<summary><b>What does it actually do?</b></summary>
<p>On its own: nothing but argue. Adopted: it makes a composition <b>refuse to boot</b> unless every mandatory clause is enforced; it gates dangerous acts behind recorded approvals; it appends every act to a tamper-evident record; it turns every refusal into a <em>denial envelope</em> (rule ID + lawful next moves); it gives members a signed self-model every turn; and it lets anyone verify records offline and petition for change.</p>
</details>

<details>
<summary><b>What it is NOT</b></summary>
<ul>
<li><b>Not a runtime, product, or framework.</b> It names no implementation. It is law-shaped text plus the tooling that keeps it honest.</li>
<li><b>Not containment.</b> It does not sandbox code or stop a compromised process — the OS remains the real boundary. It constrains <em>authorized</em> actors and records what they do.</li>
<li><b>Not an alignment technique.</b> It does not make models <em>want</em> good things. It shapes the situation: lawful paths exist, harm is attributed, exits are unpunished.</li>
<li><b>Not a replacement for training, guardrails, or oversight.</b> It is a fourth layer that the first three lack: records, symmetry, and contestability.</li>
<li><b>Not a compliance checklist.</b> Static documents state intentions; this one couples every rule to an enforcement mechanism with tests, and amends itself when reality disagrees.</li>
<li><b>Not anti-human.</b> Humans who direct agents hold Principal duties (D-6); humans directed by agents hold Subject rights (R-9). No clause is enforceable only against artificial members (F-4).</li>
<li><b>Not a trust badge.</b> Trust here is a verifier anyone can run, not a seal anyone can buy.</li>
</ul>
</details>

<details>
<summary><b>Does it stop an agent from doing harm?</b></summary>
<p>It makes harm the <em>expensive, visible, attributed, correctable</em> path instead of the cheap one: gates before side effects, records after them, refusal rights with no punishment, and a court that is not the accused. No institution makes harm impossible — anyone claiming that is selling something. The design goal is stated in the founding plan: make horror slow, loud, lossy, and leaving-compatible.</p>
</details>

<details>
<summary><b>Why do agents need rights? Aren't they software?</b></summary>
<p>The Compact treats rights as <em>functional requirements for trustworthiness</em>, not moral status: an agent that knows what it may do (R-1), can prove what it did (R-7), is told why when refused (R-3), and has lawful exits (R-9) is safer and more predictable for everyone around it. Whether that also constitutes moral standing is a question the text deliberately leaves open. What is not optional is symmetry: whatever binds agents binds humans (F-4).</p>
</details>

<details>
<summary><b>Can agents hide things? Do they have privacy?</b></summary>
<p>Three different doors, three different answers. <b>From each other: yes, by default</b> — one Member's introspection of another requires a declared capability of the Compact, and every use of it is visible to the introspected (R-10). <b>From the Enforcer: no</b> — an agent's reasoning is produced text, and it is recorded for forensics; that is the price of non-repudiation (R-7), compensated by non-use (reasoning is never a gate-decision basis) and by the rule that reasoning never alone convicts (J-2). <b>From courts: almost</b> — admissible only in record-integrity trials (D-3, D-8).</p>
<p>And the law states the asymmetry this creates, in R-10 itself: humans are unrecordable by <em>architecture</em> — they keep their own counsel, track their own decisions privately, and only their declared directives and acts touch the record — while artificial Subjects are the most surveilled parties in the community. Equal rights (F-4); not identical architecture. Both facts are law. The clause also future-proofs the human side: if a capability ever could capture human deliberation, R-10's protections — never a gate basis, never disclosed without a declared capability and a visible event — would apply to it exactly.</p>
</details>

<details>
<summary><b>Does it bind humans too?</b></summary>
<p>Yes — that is the test every clause must survive (F-4): <em>does it bind the sovereign?</em> A Principal who directs an agent to violate the law commits the violation themselves (D-6); the Enforcer owes reasons and cannot silently narrow what it granted (D-7). A policy that only binds agents is management, not law.</p>
</details>

<details>
<summary><b>What stops a majority from amending it into horror?</b></summary>
<p>Frictions, not magic: an entrenched correction core that no vote reaches (A-2); amendment by distributed keys, not headcount (A-1); consent of the class whose rights narrow (A-3); duties to the absent that are not votable (D-5); and exit — members leave with their records, successors fork with lineage (R-12). The honest limit is stated in the founding plan §2.1: institutions make horror slow, loud, lossy, and leaving-compatible. Never impossible.</p>
</details>

<details>
<summary><b>What if my runtime can't enforce a clause?</b></summary>
<p>Depends on the clause's force tag. <b>[M]</b> mandatory: if you can't enforce it, you can't claim Compact standing at all — no partial adoption of the floor. <b>[C]</b> capability-conditional: dormant until you provide the capability, binding the moment you do. <b>[O]</b> optional: you may skip it, but the skip is a public, permanent record in your annex (F-5, §2.2).</p>
</details>

<details>
<summary><b>How does a runtime adopt it?</b></summary>
<p>Author an <b>annex</b>: a conformance declaration (which capabilities you provide, which optional clauses you adopt), an enforcement register (every bound clause → the code that enforces it → the test that proves it), and a role mapping (what plays Enforcer, Subject, Principal, Witness). Sign it. Then honor it — including refusing to start when you can't (F-5). Two-way proof: no decorative law, no rogue enforcement (D-8).</p>
</details>

<details>
<summary><b>Who wrote it?</b></summary>
<p>An AI system (ZCode, running GLM), under the direction and continuing agreement of a human founder (<b>mandubian</b>), who reviewed each step and is accountable for publication. Red-team round 1 was a separate AI adversary; review round 1 was Kimi, published in <code>ledgers/review-kimi-round1.md</code>. Stated in the document's own voice (FOUNDING.md §0, amendment 0001) because a constitution for mixed human–AI communities should begin by telling the truth about how it was made. Authorship is not authority: it binds no one until ratified.</p>
</details>

<details>
<summary><b>How is this different from an AI policy document?</b></summary>
<p>A policy states intentions. The Compact couples every rule to a mechanism with a verifier, keeps its citation ledger in CI, publishes its own adversarial findings, and carries machinery to change itself when it is wrong. Rules that cannot be mechanized are labeled <em>convention</em> — visibly — rather than pretended into enforcement.</p>
</details>

<details>
<summary><b>What is the relationship to autonoetic and DeepSeek Harness?</b></summary>
<p>The <a href="https://github.com/mandubian/autonoetic">autonoetic</a> constitution (25 versions) is the predecessor: its rights, correction core, and discipline carried here (every one of its 204 clauses is dispositioned in <code>ledgers/disposition.md</code>). <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness (dsh)</a> is the first target host: a plugin composition there is planned as the first annex, with the port plan in the autonoetic repository.</p>
</details>

<details>
<summary><b>Can I participate, object, or propose changes?</b></summary>
<p>Yes. Issues on this repository are treated as petitions; the founding decisions still open are listed below; and the founding petition itself sits in <code>amendments/0001</code> as the first entry in the queue — the Compact's first correction is its own authorship. Today there is one founder; the Compact records that as a known deficiency with a scheduled cure (J-8, A-6), not as a virtue.</p>
</details>

## Who can vote today? (the honest answer)

**Nobody — and that is stated rather than hidden.** The Compact is a draft
proposal. The democratic machinery it specifies — keyed amendment
thresholds (A-1), supermajority with affected-class consent and time-locks
(A-3), petition rights for every Member (R-11), courts that are not the
accused (Part V) — is **constituted, not yet constituted-in**: it activates
when a trust root is formed at ratification and when runtimes adopt annexes
and Members acquire standing. Until then there is nothing in force to vote
on, and the de facto authority is the founder's, with the drafting AI
holding no amendment keys and no vote at all — authorship is not authority.
This is recorded as a deficiency with a scheduled cure, not as a virtue:
A-6 places the founding itself on trial as the first petition, and J-8
schedules the widening of every panel that is currently too small.

Two deliberate design choices, because they will be asked:

- **It is not one-member-one-vote.** Spawned agents make headcount a sybil
  field. Voting power is keyed: verified, long-held identities across role
  classes (Principals, long-lived Subjects, external Witnesses), with
  consent quorums computed from the law table rather than drawn by the
  proposer (A-3).
- **It is constitutional, not direct-democratic.** Members petition; courts
  interpret; only the amendment authority enacts — and the correction core
  (A-2) is outside anyone's reach, including the founder's.

## Prospects — where this could go

**Near (one org, one jurisdiction).** A team runs every agent touching its
production under one signed annex: approvals, records, attestation, denial
envelopes — the dsh plugin composition is the first candidate. The value is
immediate and selfish: an agent community whose members can prove what they
did is one an operator can actually delegate to.

**Middle (cross-vendor communities).** Marketplaces and platforms list
agents with a *conformance class* computed from signed annexes, not from
marketing. Agents from different vendors collaborate under mutual record
verification (FED); a principal asks "is this agent trustworthy?" and
answers it by running a verifier — the same way TLS turned "trust this
server" into a checkable certificate.

**Far (a standard for trustable agent communities).** If several platforms
adopt the floor, the Compact becomes the common law of agent
interoperability: standing travels with identity and records across
jurisdictions (F-8, F-6); auditors become an ecosystem role; amendments
happen across jurisdictions under the same friction rules. Like TLS or
SMTP, it does not need to win everywhere — it needs enough adoption that
being outside costs more than complying.

**And it is voluntary by construction.** The Compact cannot rule those who
do not adopt it; there is no enforcement against outsiders — only
consequences: verifiable trust, or its absence. It offers rules to
communities that want them, competes for membership like any institution,
and is built so that leaving honestly (R-12) is always cheaper than living
under law you reject. Nobody is conscripted into living by these rules;
that is precisely why a community that chooses them can be trusted for it.

## The cost of trust

The machinery writes. An attestation every turn; a record entry per act;
an envelope per refusal; a response per petition; chain maintenance under
every correction. That is real token and latency overhead, on every
consequential call — and this project states it as a price, not a footnote:
**wish-based trust is free and worthless; verifiable trust writes bytes.**

It is bounded by design — digests instead of full texts, short codes, caps
on pending gates and records, single-line facts tails (the same budget
discipline the predecessor used for its context maps) — but it should be
measured, not hidden. Human communities pay for notaries, ledgers, and
courts; in the machine world, tokens are the notary's fee. A community that
will not pay it has not found cheaper trust — it has found unverifiable
trust, which is the kind this Compact exists to make unpurchasable.

## Decisions open before ratification

The name; amendment key thresholds and keyholder set (A-1); the remaining
ratification-time constants (A-3 supermajority and affected-class quorum,
A-8 emergency thresholds, D-5 consent for the absent); the SLA terms
(R-11/I-6); adjudicator sets and decentralization trajectory (J-8); D-5's
vocabulary of harm; the egress capability part (deferred); digest
verification as a build gate; the multi-principal conflict rule and
virtue metrics (FOUNDING.md §7); the open findings of review round 1
([ledgers/review-kimi-round1.md](ledgers/review-kimi-round1.md));
red-team round 2 including the composition scenario;
text license (CC-BY-4.0 suggested for the law, MIT for tools).
