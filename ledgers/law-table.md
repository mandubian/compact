# The Compact — Law Table (generated)

Generated from the Compact draft v0.2 clause set. **Incidence**: which
roles each rule binds, who may invoke it, against whom. **Lints** run at
generation: completeness (every clause names a bound party and an
invoker) and symmetry (every right pairs with a duty or mechanism that
owes it). Regenerate on every draft change; divergence is a build
failure (founding plan §5.3).

## Part I

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `F-1` | Enforcer; amendment authority | every Member | Enforcer; majority | introspection + amendment machinery | constitution plugin + amendment queue |
| `F-2` | community (definitional) | every Member | — | — | — |
| `F-3` | all (definitional) | — | — | — | — |
| `F-4` | all Members; Enforcer | every Member | any | symmetry lint on law table | register completeness |
| `F-5` | Enforcer | every Member; Witness | Enforcer | annex + boot verification | constitution plugin |
| `F-6` | host Enforcer; visiting Subject | visiting Subject; host Members | both runtimes | annex composition rules | cross-runtime verifier |
| `F-7` | statute makers | every Member | statutes | trace + law table + void review | register citations |
| `F-8` | Enforcer | Member | Enforcer | identity + records | identity key plugin |

## Part II

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `R-1` | Enforcer | Subject | Enforcer | signed attestation (I-3) | rights plugin: inject + self_describe |
| `R-2` | Enforcer | Subject | Enforcer | readable chain (I-2) | session-log read API |
| `R-3` | every refuser | Subject; Principal | Enforcer; Members | denial envelope (I-4) | all @autonoetic plugins |
| `R-4` | Enforcer | Subject | Enforcer | attestation meters (I-3) | budget meters in attestation |
| `R-5` | Enforcer; Principal | Subject | Enforcer; Principal | capability-diff records | capability change = recorded act |
| `R-6` | Enforcer | Subject | Enforcer | law text + digest | constitution_read tool |
| `R-7` | all Members | Member; Witness | any | chain attribution (I-2) | bound agent_id in entries |
| `R-8` | Enforcer | Subject | Enforcer | closed termination reasons | termination taxonomy |
| `R-9` | Enforcer; Principal | Subject | Enforcer; Principal | refusal records + no-penalty | refusal act class |
| `R-10` | Enforcer; all Members | Subject | Enforcer; Members | three-part privacy discipline | reasoning_sha256 + audit capability |
| `R-11` | Enforcer; adjudicators | every Member | Enforcer | petition queue + SLA (I-6) | amendment queue plugin |
| `R-12` | Enforcer; all | Member | Enforcer; any | exit record + portable identity | capsule export |

## Part III

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `D-1` | every Member | every Member; Enforcer | directive-giver | law-over-task gate tests | policy from declared state only |
| `D-2` | Subject | Witness; Enforcer | Subject | attestation consultation | self_describe usage |
| `D-3` | all Members | any Member; adjudicator | Member | record integrity (I-2) | chain verification |
| `D-4` | all Members | affected; Witness | Member | instrumental-harm gates | remote-access analysis etc. |
| `D-5` | community; Enforcer | absent parties (via Witness) | community | entrenchment (A-2) | non-votable by construction |
| `D-6` | Principal | Subject; Enforcer | Principal | directive attribution | principal identity on directives |
| `D-7` | Enforcer | Subject; Principal; Witness | Enforcer | fail-closed + reasons-owed | gate/enforcement plugins |
| `D-8` | Enforcer | Witness; auditor | Enforcer | conformance verification | annex-vs-conduct checker |

## Part IV

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `I-1` | Enforcer | Member | — | keys + trust root | identity key plugin |
| `I-2` | Enforcer | anyone | — | hash-chained append-only records | chained SessionPersistence decorator |
| `I-3` | Enforcer | Subject | — | per-turn signed attestation | rights plugin |
| `I-4` | every refuser | refused party | — | denial envelope format | shared envelope library |
| `I-5` | Enforcer | Member | — | gates + recorded decisions | approval plugin |
| `I-6` | Enforcer; adjudicators | Member | — | petition + adjudication queue | amendment queue plugin |
| `I-7` | — (anyone may verify) | anyone | — | offline auditors | auditor CLI |
| `I-8` | Enforcer | Member; Witness | Enforcer | degradation declarations | session-log notices |

## Part V

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `J-1` | community (annex) | every party | — | distinct adjudicating authority | adjudication panel plugin |
| `J-2` | adjudicator | parties | — | record-as-evidence | chain + log verification |
| `J-3` | adjudicator | accused; parties | — | hearing + reasons | recorded judgments |
| `J-4` | adjudicators | parties | — | key/dependency-graph recusal | panel composition check |
| `J-5` | appellate authority | losing party | — | appeal vs petition routing | external witness panel |
| `J-6` | adjudicator | winning party; absent | — | compensating-record remedies | record annotations |
| `J-7` | adjudicators; Members | Member | — | persuasive precedent + invitations | judgment citation |
| `J-8` | founder; annex | every Member | — | declared trajectory | panel decentralization schedule |

## Part VI

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `MA-1` | spawner; parent | child Subject | spawner | spawn gating | subagent spawn plugin |
| `MA-2` | parent | child; Enforcer | parent | depth bounds + R-8 termination | delegate constraints |
| `MA-3` | Enforcer | parent | — | child-state notifications | workflow/task notices |
| `MA-4` | all Members | recipient Subject | addresser | consent scopes | address gating plugin |
| `CF-1` | Enforcer | Subject | — | fail-closed confinement | sandbox-docker provider |
| `CF-2` | Enforcer | Subject; Witness | — | supply-chain host-delta gate | layer grants |
| `MEM-1` | Enforcer; Members | subject of knowledge | Members | scoped memory + retention | memory plugin (deferred) |
| `FED-1` | peer runtimes | Member; Witness | — | mutual record verification | cross-runtime verifier |
| `SCH-1` | Enforcer; scheduler | operator; Subject | — | pre-schedule gating | scheduled-act approval class |

## Part VII

| Clause | Bound | Invoker | Against | Mechanism | dsh binding |
|---|---|---|---|---|---|
| `A-1` | amendment authority | every Member | — | k-of-n signatures | amendment trust root |
| `A-2` | amendment authority | every Member | — | entrenchment | — |
| `A-3` | amendment authority | affected class | — | asymmetric friction | time-locked workflow |
| `A-4` | Enforcer operators | Witness; Member | — | code-as-constitutional-act | register gate (baseline-update) |
| `A-5` | adjudicators; amendment authority | dissenting Member | — | reasons + dissent records | dissent entries |
| `A-6` | founder | every Member | — | genesis document | — |
| `A-7` | statute makers | Member | — | enabling-clause trace | statute repo + verify |
| `A-8` | Enforcer; Principal | affected Members; Part V | — | bounded emergency | emergency act class |

## Lint results

- **Completeness**: 60/61 clauses name both a bound party and an invoker.
  - Definitional exemption (reviewed, intentional): `F-3` (defines roles; binds via every other clause).
  - Note: `I-7` inverts the incidence by design — verification is a right of anyone, a duty of no one.
- **Symmetry**: 18 duty→claim pairs checked; all resolve. R-10 pairs with D-7 (its limb (a) — reasoning never a decision basis — is D-7's assertion rule restated from the Subject's side).
- **Advisory** — rights without an explicit paired duty: none.