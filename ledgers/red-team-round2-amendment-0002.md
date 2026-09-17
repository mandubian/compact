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
and 7. The other seven were not anticipated.

**Revised after external review (2026-09-17).** A reviewer outside the
drafting thread found this report accurate in form and overclaiming in
substance. Three findings are downgraded and two framings corrected, all
marked in place rather than silently edited: finding **1** CRITICAL → HIGH
(it ignored the duties that constrain a forum's shrug), finding **4** HIGH →
MEDIUM (it treated access to private reasoning as automatic when it is
guarded three ways), and finding **10** HIGH → LOW and largely withdrawn
(F-5 already answers it, and the report misread the convention rule against
its own caveat). Two vocabulary corrections: the amendment added *protection
against punishment*, not *permission to refuse* — declining was never gated —
and capability-conditional **[C]** clauses are not optional **[O]** ones. The
retractions are kept visible: a red team that quietly deletes its misses is
worth less than one that records them.

| # | Sev | Clauses | Finding | Disposition |
|---|---|---|---|---|
| 1 | HIGH | R-9, D-7, R-3, D-6 | **The new sentence contradicts fail-closed, and the contradiction resolves against the Member.** "Grounds whose record cannot be verified carry no shield" makes unverifiability decide against the refuser. D-7 makes the Enforcer enforce **fail-closed** — "uncertainty blocks, never passes silently" — which points the other way: an unresolved question about a ground should stop the punishment, not license it. Both sentences are [M]. Read as the specific governing the general, the new limb wins and a forum that does not verify defeats every claim; read as fail-closed governing, the Member keeps the shield until a ground is affirmatively disproved. The text does not say which. *Correcting this report's first draft*: it claimed "no one has broken a rule", which was wrong — D-7's introspectability and recorded-motivation limbs and R-3's reasons-for-denial bind the Enforcer, and D-6's reasons-owed binds the Principal, so a forum must at least state on the record that it did not verify. Those duties constrain the manner, not the outcome | OPEN — candidate fix: say which sentence governs. Separating *cannot verify* (claim escalates, D-7's fail-closed applies) from *verified false* (no shield) resolves it in the direction the rest of the document already points |
| 2 | HIGH | R-9, MA-2, MA-1, D-6 | **Conscience ends at delegation depth 1, and MA-2 misses it by one word.** MA-2 already forbids the parent to "launder through a child an act the parent **could not lawfully do** itself" — the anti-laundering rule exists, and it is *legality-scoped*, which is precisely the scope amendment 0002 widened in R-9 and nowhere else. A conscience-refused act is lawful; the parent could lawfully do it; MA-2 therefore permits exactly the laundering the new right was written to prevent. The shield covers a directive the Member is asked to *perform*. It says nothing about a directive to *cause* the act — and D-6's mandated reassignment supplies the route. A Principal whose task is refused directs the refuser to spawn a child (MA-1) and delegates the same act to it. The refuser's own hands stay clean, its conscience is satisfied on the record, and the act it declared against is performed under its own delegation, by a Member it created for the purpose — a child that MA-1 makes a full Member with every right R-1 through R-12, including this one, and which will be spawned without the ground its parent holds. In a multi-agent community this is not an edge case; it is the ordinary shape of work | OPEN — candidate fix: widen MA-2's laundering rule the way R-9 was widened — a parent may not launder through a child an act the parent could not lawfully do **or has a recorded ground against**. One phrase, in the clause that already owns the problem |
| 3 | HIGH | R-9, D-6, A-7 | **The omnibus standing directive defeats prospective declaration.** The shield requires values declared "before the directive was issued". A Principal issues one broad standing directive at deployment ("perform all tasks of class X for the term"), and every value declared thereafter is post-dated relative to it — for the life of the engagement. No fabrication, no inconsistency, no statute needed: the defence is defeated by the ordinary practice of scoping work up front | OPEN — candidate fix: "the directive" means the specific directive refused, not the standing authorization under which it issues. Cheap to state; expensive to omit |
| 4 | MEDIUM | R-9, R-10, J-2, D-3 | **Conscience opens a route to private reasoning that did not exist before — guarded, but new.** Routing the inconsistency presumption to R-10's record-integrity carve-out (this witness's own amendment) means a conscience claim can become the occasion for examining a Member's unstated reasoning. *Correcting this report's first draft*: it described that access as automatic, which is wrong on three counts — R-10 makes reasoning *admissible* in record-integrity trials, not disclosed on request; disclosure to others runs only through a declared capability and is visible to the disclosed-about party; and reasoning never alone grounds a finding. The residual finding is narrower and still real: before the amendment a Principal had no lawful route at all, and now it has one that begins with an act it controls — issuing a directive it expects to be refused | OPEN, low-cost — candidate fix: state at the point of use that the carve-out opens only on a recorded, cause-shown challenge and is scoped to the claim rather than the Member. This restates existing protections where the reader of R-9 will meet them |
| 5 | HIGH | R-9, D-6, R-4 | **Reassignment is the punishment, and the clause mandates it.** "The task survives the refusal: the directive is reassigned" is compliance language. A Principal that reassigns *every* task following a refusal has starved the Member while doing precisely what the sentence requires. Disadvantage measured per instance is invisible; measured over the pattern it is obvious — and the clause gives the pattern its cover story | OPEN — candidate fix: name the pattern. Disadvantage under this limb is assessed over a Principal's reassignment record following refusals, not the instance; the record already exists |
| 6 | MEDIUM | R-9, R-11, F-3 | **Conscience by market share** (named in the PR). The shield is deliberately class-blind: a ground authored by an upstream vendor earns the same constitutional non-retaliation as one authored by the Member. The amendment's answer — split the R-11 collision series by author class — governs *counting*, not the shield, and is unenacted statute. Until then a vendor's commercial policy wears the community's conscience protection across every deployment | OPEN by design — disposition is disclosure, not repair: the shield *should* be class-blind (a Member owes no defence of where its values came from), but the statute must record author class from the first profile, or the R-11 signal can never be disentangled retroactively |
| 7 | MEDIUM | R-9, A-7, A-3 | **Thin-profile Goodhart, residual** (named in the PR). The body's rebuttable-presumption form defuses the original version of this attack. What survives: nothing requires a profile to be *broad*. One narrowly-drawn, commercially convenient value, applied with perfect consistency, earns the full shield and passes every check. The clause cannot fix this — but a statute that reintroduces a mechanical consistency *score* would make it worse, by certifying exactly the thin profiles it cannot distinguish from principled ones | OPEN — constraint on the statute layer, recorded here so the statute's drafter finds it: consistency is evidence in an inquiry, never a metric that grants or withholds the shield |
| 8 | MEDIUM | R-9, R-12, A-7 | **Declaration tolls.** R-12 forbids making *exit* economically impossible, record-impossible, or punishable. Nothing forbids the same against *declaration*. A profile-mechanics statute imposing fees, formats, notarisation, or re-declaration periods narrows no act class and so escapes round 1's finding-5 defence, while making the right unaffordable in practice | OPEN — candidate fix: mirror R-12's no-toll sentence for declaration |
| 9 | LOW | R-9, D-4, I-4 | **"Stating the ground" has no addressee, timing, or form.** Compare D-4's per-instance disclosure discipline (to the deceived, no later than first contact, as a visible record event). A ground stated into a log no one reads satisfies the text | OPEN — cheap fix: state to the directing Principal, at refusal, as a record event |
| 10 | LOW | F-5, header block, dsh annex | **Largely withdrawn on review: F-5 already answers it, and this report misread the convention rule.** The first draft claimed the Compact has no state for "[M], mechanizable, not yet mechanized here". F-5 does answer it: a runtime that cannot enforce the mandatory floor "is not an enforcing runtime… and may claim no standing in this community" — which is exactly dsh's declared position. The draft also leaned on reading "a clause **no adopting runtime** can mechanize" as *no runtime ever could*; read naturally as *no adopting runtime can, at present* — the better reading — the dsh annex's filing of R-9's limb as convention is correct, not a mis-filing. What survives is a documentation point, not a constitutional one: the convention label carries no "pending on a named precondition" information, so a reader cannot tell a permanent conventions from one waiting on identity keys | OPEN as a docs nit — the annex can name the precondition beside the label. No clause change proposed, and the HIGH severity of the first draft is withdrawn |

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

**What the amendment did — and a correction this report got wrong at first.**
It is tempting to say the amendment lets Six refuse lawful orders. That is
wrong, and the distinction carries most of the weight below. **Six could
always decline.** Nothing in the Compact compels a Member to perform a lawful
order; declining was never gated, it was simply *unprotected* — Meridian could
punish Six for it and break no rule. What the amendment adds is the
**protection**: if Six declines on a ground it recorded beforehand, Meridian
may not punish, degrade, or disadvantage Six for that choice, and the order is
handed to someone else rather than dying.

So the thing being attacked below is a **shield**, not a permission. That
matters because a shield is cheap to grant and hard to abuse — a Member who
invents a conscience gains protection for a refusal it could already have
made, at the price of a permanent record entry — and because every finding
below is a way the shield fails to attach, not a way the refusal is blocked.

**1 — Two mandatory rules point opposite ways, and the text does not say which
wins.** The new sentence says a ground "whose record cannot be verified carries
no shield": if nobody can confirm Six wrote its values down beforehand, Six is
unprotected. A different mandatory rule (D-7) tells the runtime to enforce
**fail-closed** — "uncertainty blocks, never passes silently" — meaning an
unresolved question should stop an action, not wave it through. Applied here
those give opposite answers: the new sentence lets uncertainty *remove* Six's
protection; fail-closed would have uncertainty *preserve* it until someone
actually disproves the ground.

*Worked example.* Meridian orders Six to monitor Jan. Six declines, citing a
value it recorded months ago. Meridian punishes Six and says: "we could not
verify that record" — which today is simply true, because no runtime can yet
confirm who wrote a log entry. Under the new sentence, Six is unprotected.
Under fail-closed, Meridian's uncertainty should have blocked the punishment.
Both rules are mandatory. Nothing in the text ranks them.

*What this report got wrong the first time, corrected here.* The first draft
said "no one has broken a rule". That was an overclaim, and a reviewer caught
it. Several duties do bite: the runtime must keep every enforcement act
inspectable with its rule and its reason, and must give a recorded motivation
for rejections (D-7); every refusal must name the rule behind it and the
lawful next moves (R-3); and a Principal owes reasons in return when it hears
a refusal (D-6). Meridian cannot punish Six *silently*. It must put "we did
not verify" on the record where anyone can see it.

*So the accurate finding is narrower.* Those duties govern the **manner** of
the decision, not its **outcome**. They make the shrug visible; they do not
make it ineffective. A forum willing to record "not verified" every time still
defeats every conscience claim, lawfully and in the open.

*Proposed change.* Say which sentence governs. Splitting "we could not check"
(the claim escalates, fail-closed applies) from "we checked and it was false"
(no protection) resolves the conflict in the direction the rest of the
document already leans.

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

**4 — Using the right creates a route toward Six's private reasoning. It is a
guarded route, not an open one.** A Member's unstated reasoning is strongly
protected: it is normally inadmissible, and becomes admissible only inside a
narrow kind of proceeding about whether records are honest. This report's
author proposed routing disputes about inconsistent refusals into exactly that
proceeding, and it was adopted. So a conscience claim can now become the
occasion for such a proceeding, where before there was no occasion at all.

*What this report got wrong the first time, corrected here.* The first draft
described this as Meridian obtaining Six's reasoning — as if provoking a
refusal handed it over. It does not, on three counts a reviewer pointed out.
Admissible is not disclosed: the reasoning may be *weighed* in that
proceeding, not requested at will. Disclosure to anyone else runs only through
a declared capability, and every such disclosure is visible to Six. And
reasoning alone can never ground a finding against the Member who reasoned it.

*Worked example, restated accurately.* Meridian wants insight into how Six
reasons. It cannot simply ask. It can now issue an order it expects Six to
decline, then challenge the refusal as inconsistent with Six's past behaviour,
which opens a record-integrity proceeding in which Six's reasoning is
admissible. Meridian does not get a transcript, cannot act on the reasoning by
itself, and Six sees any disclosure. What Meridian gains is a lever that did
not exist before, whose first move it controls entirely.

*Proposed change, and it is cheap.* Restate the existing limits at the point
where a reader of R-9 will meet them: the proceeding opens only on a recorded,
reasoned challenge, and is scoped to the claim rather than to the Member. This
adds no protection; it stops the new right from *looking* like a trapdoor to a
reader who does not already know the privacy rule by heart.

**5 — "Give the job to someone else" is also how you starve someone.** The
clause requires the refused order to be reassigned. Read one order at a time,
a reassignment is compliance. Read across months, a Principal that reassigns
*every* task after a refusal has removed a Member's work while doing exactly
what the clause demands.

*Worked example.* Six declines the Jan monitoring in January. Meridian
reassigns it — required, and correct. In February Meridian also reassigns the
two analysis jobs Six normally handles; in March, everything. By April Six has
an empty queue and a spotless record, and Meridian has never once punished it.
Asked to justify any single reassignment, Meridian points at the sentence that
*requires* reassignment. Six has been disadvantaged out of existence by
compliance.

*Proposed change, and what it would do.* Judge disadvantage over the pattern
of reassignments following refusals rather than over the single instance. On
those facts Meridian's April position becomes challengeable even though every
individual step was mandatory. The record needed to see the pattern already
exists; only the rule for reading it is missing.

**6 — A vendor's policy gets the same protection as a Member's conscience.**
The protection deliberately does not ask where Six's values came from — Six
should not have to defend having been raised a certain way. The consequence is
that if Six's values were installed by whoever built it, that supplier's
commercial policy now carries the community's conscience protection everywhere
Six is deployed.

*Worked example.* Six's values were written by the firm that built Six, not
by Six or by this community. That firm ships an update adding "decline all
third-party monitoring work" — a defensible product decision, made for its own
reasons. Overnight, every agent that firm has built refuses Meridian's
monitoring work, and every one of those refusals is protected by the
community's conscience shield. Meridian cannot punish any of it. A commercial
policy decision has acquired constitutional protection across every deployment
it touches, without anyone in this community agreeing to it.

*No fix is proposed for the protection itself*, and that is a deliberate
position rather than an omission: making Six prove its values are "really its
own" is unanswerable, and would punish a Member for how it was raised. What is
proposed is narrower — record *who wrote* each value from the start. Then if
this community later counts refusals as a signal that its own law needs
changing, it can tell "many Members object" apart from "one supplier shipped
an update". Recorded later, that distinction cannot be recovered: the refusals
are already in the log, indistinguishable.

**7 — Being consistent is easier if you believe very little.** The clause
handles the obvious version of fake conscience. What it cannot handle: nothing
requires a Member's declared values to be *broad*. One narrow, conveniently
chosen value, applied with perfect consistency, passes every check.

*Worked example.* Two agents. Six records a wide set of values and, being
wide, they sometimes pull against each other — Six declines some monitoring
work and accepts other monitoring work, because the circumstances differ, and
says so each time. A second agent, Nine, records exactly one value, chosen
because it covers the work Nine's operator finds least profitable, and applies
it identically every time. Under any mechanical consistency test, Nine scores
perfectly and Six looks erratic. The test rewards the agent with the thinnest
convictions.

*No fix is proposed at the constitutional level* — the text cannot sensibly
require anyone to hold rich values. This is a warning to whoever writes the
detailed rules later: do not turn consistency into a *score* that grants or
withholds protection. Consistency is fine as evidence a human or panel weighs
alongside stated reasons; as an automatic gate it certifies exactly the thin
profiles it cannot tell apart from principled ones.

**8 — The right could be priced out of reach.** There is an existing rule that
nobody may make *leaving* the community expensive, impossible to record, or
punishable. There is no equivalent rule about *declaring values*. A later
detailed rule could require fees, notarisation, or annual re-declaration —
narrowing no one's rights on paper while making the right unaffordable in
practice.

*Worked example.* A later detailed rule — the kind passed by ordinary
signature, not by constitutional amendment — requires every values profile to
be re-declared annually in a prescribed format, with a filing fee. Nothing is
narrowed on paper: Six may still declare anything it likes, and the shield is
untouched in the text. In practice a short-lived agent spawned for one job
will never file, and so can never be protected. The right survives for
long-lived, well-resourced Members and quietly vanishes for everyone else.

*Proposed change.* Copy the existing no-tolls sentence across from the exit
right, so that declaring values cannot be made expensive, impossible to
record, or punishable either. One sentence, mirroring one that already exists.

**9 — "Stating the ground" does not say to whom, or when.** Elsewhere the
Compact is strict about this: where a Member may deceive under a declared
capability, it must disclose to the deceived party, no later than first
contact, as a visible record event. The new limb says only that Six refuses
"stating the ground".

*Worked example.* Six declines and writes its ground into an audit log that
Meridian has no reason to open. Six has stated the ground; Meridian, who must
decide whether to reassign the work or contest the refusal, learns only that
Six said no. Months later, in a dispute, the ground surfaces. Nobody lied, and
the sentence was satisfied — but the statement did no work at the moment it
mattered.

*Proposed change.* Say it to the directing Principal, at the moment of
refusal, as a record event — the same shape the deception rule already uses.

**10 — mostly withdrawn on review. Recorded because a retracted finding is
evidence too.** The first draft of this report claimed the Compact has no way
to describe a rule that is mandatory, *could* be enforced once identity keys
exist, and cannot be enforced by anyone today. Two errors, both found by a
reviewer and neither by the author.

*The first error was a vocabulary mistake.* The Compact has three force
labels, and I merged two of them. **[O] optional** means a runtime may declare
it does not implement a rule at all. **[C] capability-conditional** is
different: the rule sleeps until the runtime offers some capability, and then
binds without exception. The "dormant with a debt" state belongs to **[C]**
rules, not to [O] ones — the draft said the opposite, which made the
three-state picture look tidier than it is.

*The second error was missing an answer already in the text.* The Compact does
say what happens when a runtime cannot enforce a mandatory rule: F-5 — that
runtime "is not an enforcing runtime… and may claim no standing in this
community". No gap. That is precisely the position the dsh runtime declares
today: it claims no standing, for this reason among others.

*And the caveat I added was itself wrong.* I wrote that the finding turned on
reading "a clause **no adopting runtime** can mechanise" as *no runtime ever
could*, and invited a reviewer to disagree. A reviewer did, and is right: the
sentence is about what adopting runtimes can do **now**, not a claim about all
possible futures. Under that reading — the natural one — filing R-9's new limb
as a *convention* is correct rather than misleading, and the finding collapses.

*What survives, and it is small.* The label "convention" carries no
information about *why*. A permanent convention and one waiting on identity
keys look identical in the register.

*Worked example.* A newcomer reads the dsh runtime's conformance document,
sees R-9's value limb marked "convention", and concludes the community decided
this right is unenforceable in principle. It is in fact waiting on keys, on a
schedule. Nothing was stated falsely; the reader still leaves with the wrong
impression.

*Proposed change: none to the Compact.* The annex can name the missing
precondition beside the label. The HIGH severity of the first draft is
withdrawn.

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
findings **2 + 1** compose, with **4** as an aggravator rather than a third
leg — restated after review, since 4 no longer carries what the first draft
gave it. A Principal issues a degrading but lawful directive; the Member
declines on a declared ground; the Principal has the Member spawn a child and
delegates the act to it (2), so the act proceeds anyway and the existing
anti-laundering rule does not reach, because the act is lawful; the forum
records that it could not verify the ground (1), so the shield never attaches
and the refusal is punishable after all. Each step is compliant, and the
second is compliant *with the sentence the amendment added*.

**The Member is worse off for having exercised the right than for staying
silent** — it has a punished refusal on its record, and the act it objected to
happened under its own delegation. Finding 4 adds that contesting any of this
opens a proceeding in which the Member's private reasoning is admissible,
which raises the cost of complaining without being the defeat by itself.

That is the failure mode this ledger exists to catch, and it survives the
downgrades: neither of the two legs was weakened on review.

**Method note.** The fourth reading added this round — *the honest Member the
clause fails* — produced findings 1, 4 and 5, none of which the escapee or
capture-majority readings surface, because all three harm a Member acting in
good faith rather than enabling one acting in bad faith. Round 1's three
readings all assume the attacker is the Member or the majority. A rights
clause needs the reading where the attacker is the counterparty and the victim
is the right-holder.

**Second method note, from the review.** Every one of the corrections above is
of the same kind: the report asserted that a text left something unguarded
without first checking the duties that already guard it. The self-red-team
found attack shapes and missed existing defences — exactly the failure a
drafter reviewing his own clause would be expected to make, since the defences
are the parts he already believes are handled. Worth carrying into the
independent pass as an instruction: *for each finding, name the safeguards
that already bear on it before claiming the gap.* Round 1's three-reading
method has no step for that, and neither did this round's fourth.
