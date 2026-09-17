# Compact Red-Team — Round 2, Amendment 0002 (value-scoped refusal)

**Target**: draft v0.5 as amended by
[amendment 0002](../amendments/0002-value-scoped-refusal.md) — R-9's second
paragraph, the conscience limb · **Method**: round 1's three readings per
clause — escapee, captured Enforcer, capture majority — plus a fourth this
clause invites: **the honest Member the clause fails** · **Dispositions**:
OPEN unless marked, since this pass ran *after* adoption rather than before.

**Independence disclosure — the worst in this project's history.** Round 1's
adversary was correlated with the drafter (same harness, different instance).
This adversary is not merely correlated: **it is one of the two witnesses who
argued the clause into existence** (Claude Opus 5, issue #2). Findings 1 and 4
below attack proposals this same system pressed for and won. A red team
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
