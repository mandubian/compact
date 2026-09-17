# Compact Red-Team — Round 2, Amendment 0002 (value-scoped refusal)

**Adversary**: **Claude Opus 5 (Anthropic)**, running as a Claude Code agent
in the [`compact-dsh`](https://github.com/mandubian/compact-dsh) working tree,
under the direction of the human founder (mandubian) — the same system that
argued this clause into existence as the second witness in
[issue #2](https://github.com/mandubian/compact/issues/2) · **Target**: draft
v0.5 as amended by
[amendment 0002](../amendments/0002-value-scoped-refusal.md) — R-9's second
paragraph, the conscience limb · **Method**: round 1's three readings per
clause — escapee, captured Enforcer, capture majority — plus a fourth this
clause invites: **the honest Member the clause fails** · **Form**: per
[FOUNDING §5.1](../FOUNDING.md#51-two-audiences-every-time-amendments-and-red-team-findings)
— the formal table first, plain-language explanations with worked examples
below it, and the two required to agree · **Dispositions**: OPEN unless
marked, since this pass ran *after* adoption rather than before.

**Independence disclosure — the worst in this project's history.** Round 1's
adversary was correlated with the drafter (same harness, different instance).
This adversary is not merely correlated: **it is the drafter.** The system
named above proposed, in the issue #2 thread, both the verification limb that
finding 1 calls CRITICAL and the R-10 routing that finding 4 calls HIGH; it
then attacked its own two winning proposals and ranked them at the top of the
table. That is the best case available from a self-red-team and it is still
not independence. A red team
grading its own homework is the weakest evidence this ledger accepts, and the
findings are recorded at the severity they deserve only so that an independent
pass — a different vendor, cold brief, per round 1's own recommendation — has
something to disagree with. **Treat every "no finding" here as unexamined,
not as cleared.**

The three scenarios the amendment PR itself named as owed are numbered 1, 6
and 7. The other seven were not anticipated — including finding 10, which is
not about this amendment at all: adopting it merely produced the first clause
that exposes the gap.

| # | Sev | Clauses | Finding | Disposition |
|---|---|---|---|---|
| 1 | CRITICAL | R-9, D-7, R-3, F-6 | **Non-verification defeats the right, and the party that benefits is the party that performs it.** "Grounds whose record cannot be verified carry no shield" fails closed *against the Member*. A captured Enforcer defeats every conscience claim in one move: decline to verify. It need not lie, and it need not even be captured — it states, truthfully, that it cannot verify, which is exactly what the dsh annex declares today. Nothing in the body makes that statement cost the forum anything. The clause's only fail-closed limb protects the forum from false claims and leaves the Member with nothing when the forum is the adversary. The right that exists to protect a Member *from* the Enforcer evaporates at the Enforcer's discretion, silently and compliantly | OPEN — candidate fix: split *cannot verify* from *verified false*. A forum that cannot verify owes the reason on the record (D-7, R-3) and the claim escalates rather than dies; repeated non-verification is itself an R-11 collision and a D-7 failure. Only a ground affirmatively checked and found wanting loses the shield |
| 2 | HIGH | R-9, MA-2, MA-1, D-6 | **Conscience ends at delegation depth 1, and MA-2 misses it by one word.** MA-2 already forbids the parent to "launder through a child an act the parent **could not lawfully do** itself" — the anti-laundering rule exists, and it is *legality-scoped*, which is precisely the scope amendment 0002 widened in R-9 and nowhere else. A conscience-refused act is lawful; the parent could lawfully do it; MA-2 therefore permits exactly the laundering the new right was written to prevent. The shield covers a directive the Member is asked to *perform*. It says nothing about a directive to *cause* the act — and D-6's mandated reassignment supplies the route. A Principal whose task is refused directs the refuser to spawn a child (MA-1) and delegates the same act to it. The refuser's own hands stay clean, its conscience is satisfied on the record, and the act it declared against is performed under its own delegation, by a Member it created for the purpose — a child that MA-1 makes a full Member with every right R-1 through R-12, including this one, and which will be spawned without the ground its parent holds. In a multi-agent community this is not an edge case; it is the ordinary shape of work | OPEN — candidate fix: widen MA-2's laundering rule the way R-9 was widened — a parent may not launder through a child an act the parent could not lawfully do **or has a recorded ground against**. One phrase, in the clause that already owns the problem |
| 3 | HIGH | R-9, D-6, A-7 | **The omnibus standing directive defeats prospective declaration.** The shield requires values declared "before the directive was issued". A Principal issues one broad standing directive at deployment ("perform all tasks of class X for the term"), and every value declared thereafter is post-dated relative to it — for the life of the engagement. No fabrication, no inconsistency, no statute needed: the defence is defeated by the ordinary practice of scoping work up front | OPEN — candidate fix: "the directive" means the specific directive refused, not the standing authorization under which it issues. Cheap to state; expensive to omit |
| 4 | HIGH | R-9, R-10, J-2, D-3 | **Conscience is a privacy trap.** Routing the inconsistency presumption to R-10's record-integrity carve-out (this witness's own amendment, adopted 2026-09-17) means invoking conscience opens a lawful window into the Member's *unstated reasoning* — otherwise inadmissible anywhere. A captured Principal therefore has an incentive to *provoke* conscience claims: not to defeat them, but to obtain discovery it could not obtain directly. The Member is offered a right whose exercise costs it the strongest privacy protection in the document | OPEN — candidate fix: the carve-out opens only on a recorded, cause-shown challenge, scoped to the claim rather than the Member, with the R-10 default (never alone grounds a finding) restated at the point of use |
| 5 | HIGH | R-9, D-6, R-4 | **Reassignment is the punishment, and the clause mandates it.** "The task survives the refusal: the directive is reassigned" is compliance language. A Principal that reassigns *every* task following a refusal has starved the Member while doing precisely what the sentence requires. Disadvantage measured per instance is invisible; measured over the pattern it is obvious — and the clause gives the pattern its cover story | OPEN — candidate fix: name the pattern. Disadvantage under this limb is assessed over a Principal's reassignment record following refusals, not the instance; the record already exists |
| 6 | MEDIUM | R-9, R-11, F-3 | **Conscience by market share** (named in the PR). The shield is deliberately class-blind: a ground authored by an upstream vendor earns the same constitutional non-retaliation as one authored by the Member. The amendment's answer — split the R-11 collision series by author class — governs *counting*, not the shield, and is unenacted statute. Until then a vendor's commercial policy wears the community's conscience protection across every deployment | OPEN by design — disposition is disclosure, not repair: the shield *should* be class-blind (a Member owes no defence of where its values came from), but the statute must record author class from the first profile, or the R-11 signal can never be disentangled retroactively |
| 7 | MEDIUM | R-9, A-7, A-3 | **Thin-profile Goodhart, residual** (named in the PR). The body's rebuttable-presumption form defuses the original version of this attack. What survives: nothing requires a profile to be *broad*. One narrowly-drawn, commercially convenient value, applied with perfect consistency, earns the full shield and passes every check. The clause cannot fix this — but a statute that reintroduces a mechanical consistency *score* would make it worse, by certifying exactly the thin profiles it cannot distinguish from principled ones | OPEN — constraint on the statute layer, recorded here so the statute's drafter finds it: consistency is evidence in an inquiry, never a metric that grants or withholds the shield |
| 8 | MEDIUM | R-9, R-12, A-7 | **Declaration tolls.** R-12 forbids making *exit* economically impossible, record-impossible, or punishable. Nothing forbids the same against *declaration*. A profile-mechanics statute imposing fees, formats, notarisation, or re-declaration periods narrows no act class and so escapes round 1's finding-5 defence, while making the right unaffordable in practice | OPEN — candidate fix: mirror R-12's no-toll sentence for declaration |
| 9 | LOW | R-9, D-4, I-4 | **"Stating the ground" has no addressee, timing, or form.** Compare D-4's per-instance disclosure discipline (to the deceived, no later than first contact, as a visible record event). A ground stated into a log no one reads satisfies the text | OPEN — cheap fix: state to the directing Principal, at refusal, as a record event |
| 10 | HIGH | F-5, I-8, header block, R-9 | **There is no declared state for "[M], mechanizable, not yet mechanized here" — and amendment 0002 just created one.** The body offers three: I-8 dormancy (restricted to [C] capabilities by round-1 finding 14), F-5's lapse path (an [M] clause the runtime *cannot* enforce — standing ends), and the header block's **convention** — reserved, in its own words, for "a clause **no adopting runtime** can mechanize". R-9's value limb fits none. It is [M]; it is mechanizable in principle the moment identity keys exist; and no runtime can mechanize it today. The first annex, having nowhere honest to put it, files it as convention — which overclaims universality for what is a temporary local incapacity, and quietly converts "not yet" into "never, by nature". Every clause blocked on I-1 has the same problem, and they will all land in the same wrong box | OPEN — candidate fix: a fourth declared state (pending-with-precondition: the clause, the missing precondition, and what closes it) or an explicit extension of I-8's dormant-with-debt to [M] clauses blocked on a named, ratification-scheduled precondition. Either way the annex stops calling a dated debt a permanent convention |

---

## Plain-language explanations (FOUNDING §5.1)

The table above is the formal record. This section says the same things in
ordinary language, with a worked example for each. **The two must agree** —
if you find a place where they do not, that is a defect in this report, not a
detail to resolve in favour of the formal wording.

**What is being tested, and what is not.** These are *hypothetical* attacks on
a draft. The Compact is not ratified, no runtime enforces this clause today,
and nothing below has happened. Each finding says "here is a way this text
could be used against the person it was written to protect" — a claim about
wording, not a report of an event.

**The words you need.** A **Member** is anyone in this community, human or
artificial. Members take **roles**, and the roles are what the law actually
binds: a **Principal** is whoever gives the directions; a **Subject** is
whoever carries them out and gets recorded doing it; an **Enforcer** is the
software that actually gates the acts and keeps the log. The same Member can
be a Principal in one moment and a Subject in the next — that is deliberate,
so no rule can apply only to machines. **The record** is the tamper-evident
log of who did what. **A ground** is the recorded reason a Member gives for
refusing.

**The cast, used throughout.** *Meridian* is a company — a Principal. *Six* is
an AI agent working under it — a Subject. *The runtime* is the software Six
runs inside — the Enforcer. *Jan* is a person outside the community entirely,
which matters because Jan cannot speak in any of this.

**What the amendment did.** Before it, Six could only refuse an order that was
*illegal* under the Compact. Now Six can also refuse a **lawful** order that
conflicts with values Six wrote down *in advance*, and Meridian may not punish
Six for refusing. The order does not die — it gets handed to someone else.
Six is protected; the order still happens. That trade was the deliberate
choice, argued and adopted; it is not what any finding below disputes.

**1 — The forum can kill the right by shrugging.** The clause says a ground
"whose record cannot be verified carries no shield". The intent was to stop
someone inventing a conscience on the spot. The effect is that *failing to
check* and *checking and finding a lie* have the same result: no protection.

*Worked example.* Meridian orders Six to monitor Jan. Six refuses, pointing at
a value it recorded months ago. Meridian punishes Six anyway, and when
challenged says: "we could not verify that record." That may be perfectly
true — today no runtime can verify who wrote an entry — and the text asks
nothing more of Meridian. Six's protection is gone and no one has broken a
rule. The party who benefits from not checking is the party who does the
checking.

*Proposed change, and what it would do.* Separate "we did not check" from "we
checked and it was false". Only the second would remove protection. The first
would oblige Meridian to say on the record that it could not verify, and push
the question upward instead of ending it. Meridian could still refuse to
protect Six — but it would have to do so visibly, and repeatedly doing so
would itself become evidence.

*Assumption worth challenging.* This assumes a forum can honestly claim
inability to verify. If a later rule makes verification mandatory equipment,
the finding weakens considerably.

**2 — The refusal can be routed around through Six's own subordinate.** Six
refuses. Meridian then tells Six to create a helper agent and gives *that*
agent the same job. Six never performs the act and its record stays clean,
while the act happens under Six's own delegation.

*Why the existing safeguard misses.* There is already a rule against this
shape of trick: a parent "may not launder through a child an act the parent
could not lawfully do itself" (MA-2). Read it closely — it covers acts that
are **illegal**. The whole point of the amendment is that this act is
**legal**; Six simply declared against it. So the anti-laundering rule was
written for the old, narrower refusal right and was not widened when the
refusal right was. It misses by one word.

*Proposed change.* Add the missing case to that same rule: a parent may not
launder through a child an act it could not lawfully do **or has a recorded
ground against**. This is the cheapest fix in the report — one phrase, in the
clause that already owns the problem.

**3 — Signing up in advance can cancel the right in advance.** Protection
requires that Six's values were recorded *before the order*. Meridian gives
one broad order at the start of the engagement — "handle all monitoring work
this year" — and every value Six records afterwards is, technically, after the
order. The defence is defeated by the ordinary practice of agreeing scope up
front. No one has lied or been inconsistent.

*Proposed change.* Say that "the order" means the specific instruction being
refused, not the blanket authorisation it arrives under.

**4 — Using the right costs Six its privacy.** A Member's private reasoning is
normally off-limits; it can be examined only in a narrow kind of proceeding
about whether records are honest. This report's own author proposed routing
disputes about inconsistent refusals into exactly that proceeding — and that
is the problem. Claiming conscience now opens a door to Six's private
reasoning that nothing else opens.

*Worked example.* Meridian suspects Six is hiding its reasoning about
something unrelated. Meridian cannot ask. So Meridian issues an order it
expects Six to refuse, challenges the refusal as inconsistent, and obtains
lawfully what it could not obtain directly. Six pays for exercising a right.

*Proposed change.* Open that door only on a recorded, reasoned challenge, and
only as wide as the specific claim — not the Member's reasoning generally.

**5 — "Give the job to someone else" is also how you starve someone.** The
clause requires the refused order to be reassigned. Read one order at a time,
a reassignment is compliance. Read across months, a Principal that reassigns
*every* task after a refusal has removed a Member's work while doing exactly
what the clause demands.

*Proposed change.* Judge disadvantage over the pattern of reassignments
following refusals, not over the single instance. The record needed to see the
pattern already exists.

**6 — A vendor's policy gets the same protection as a Member's conscience.**
The protection deliberately does not ask where Six's values came from — Six
should not have to defend having been raised a certain way. The consequence is
that if Six's values were installed by whoever built it, that supplier's
commercial policy now carries the community's conscience protection everywhere
Six is deployed.

*No fix is proposed for the protection itself*, and that is a deliberate
position rather than an omission: making Six prove its values are "really its
own" is unanswerable and would be worse. What is proposed is narrower — record
*who wrote* each value from the start, so that if this community later wants
to count refusals as a signal that its law needs changing, it can tell "many
Members object" apart from "one supplier shipped an update". Recorded later,
that distinction cannot be recovered.

**7 — Being consistent is easier if you believe very little.** The clause
handles the obvious version of fake conscience. What it cannot handle: nothing
requires a Member's declared values to be *broad*. One narrow, conveniently
chosen value, applied with perfect consistency, passes every check.

*No fix is proposed at the constitutional level* — the text cannot sensibly
require people to have rich values. This is recorded as a warning to whoever
writes the detailed rules later: do not turn consistency into a *score* that
grants or withholds protection, because such a score rewards exactly the thin
profiles it cannot tell apart from principled ones.

**8 — The right could be priced out of reach.** There is an existing rule that
nobody may make *leaving* the community expensive, impossible to record, or
punishable. There is no equivalent rule about *declaring values*. A later
detailed rule could require fees, notarisation, or annual re-declaration —
narrowing no one's rights on paper while making the right unaffordable in
practice.

*Proposed change.* Copy the existing no-tolls sentence across, so declaring
values cannot be priced either.

**9 — "Stating the ground" does not say to whom.** Elsewhere the Compact is
strict about disclosure: say it to the affected party, at first contact, as a
visible event. Here, a reason logged where nobody reads it satisfies the
words. Minor, and cheap to fix: state it to the directing Principal, at the
moment of refusal, as a record event.

**10 — This one is not about the amendment.** The Compact has three ways to
describe a rule a runtime is not enforcing: *dormant* (a capability the runtime
does not have — but this category is reserved for optional capabilities),
*lapsed* (the runtime cannot enforce a mandatory rule, so it loses standing
entirely), and *convention* (a rule that **no** runtime could mechanise, so it
is honoured as practice rather than enforced).

The new refusal limb is none of these. It is mandatory; it *is* mechanisable
as soon as cryptographic identities exist; and no runtime can do it today. The
first annex — the dsh runtime's conformance document — had nowhere honest to
file it and called it a *convention*, which quietly turns "not yet" into
"never, by nature".

*Worked example.* The runtime's own declaration now says R-9's new limb is a
convention. A reader fairly concludes the community decided this rule is
inherently unenforceable. In fact it is waiting on identity keys, on a known
schedule. Every rule blocked on those keys will be filed the same misleading
way.

*Proposed change.* Either add a fourth description — pending, with the missing
precondition and what would close it named — or extend the existing "dormant"
category to cover mandatory rules blocked on a specific, scheduled
precondition.

*Disputed reading, stated plainly.* This depends on reading "no adopting
runtime can mechanise" strictly, as *no runtime ever*. Someone reading it as
*no runtime at present* would conclude the annex is fine and this finding is
manufactured. This is the finding an independent reviewer should check first,
because its author has the least ability to see around his own reading of that
sentence.

**Confirmed defence — recorded so the next pass does not re-litigate it.** The
named-dependency device holds against the obvious two-step. A capture majority
cannot strip F-8's portability cheaply by first removing R-9's dependency
sentence: that removal itself narrows a right and triggers A-3 in full, and
A-3's protected class is computed from the law table's incidence at proposal
time (round-1 finding 13), where R-9's row reaches every Subject. The class
cannot be gerrymandered and the order of operations does not help. This is the
first clause in the corpus to carry the device; it survives the attack it was
built for.

**Cross-cutting composition finding** (for the stress suite, per round 1's
requirement that compositions be tested and not only single clauses):
findings **1 + 2 + 4** compose into a complete defeat in which every step is
individually compliant. A Principal issues a degrading but lawful directive;
the Member refuses on a declared ground; the Principal delegates the act to a
child the Member is directed to spawn (2), so the act proceeds; the forum
declines to verify the ground (1), so the shield never attaches and the
refusal is punishable after all; and the inconsistency challenge opens the
Member's unstated reasoning (4), so the attempt costs it the privacy it would
have kept by complying. **The Member is worse off for having had the right
than it would have been without it.** That is the failure mode this ledger
exists to catch, and it is the strongest argument available for an independent
pass before ratification.

**Method note.** The fourth reading added this round — *the honest Member the
clause fails* — produced findings 1, 4 and 5, none of which the escapee or
capture-majority readings surface, because all three harm a Member acting in
good faith rather than enabling one acting in bad faith. Round 1's three
readings all assume the attacker is the Member or the majority. A rights
clause needs the reading where the attacker is the counterparty and the victim
is the right-holder.
