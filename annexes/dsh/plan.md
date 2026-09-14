# Porting autonoetic's Concepts to DeepSeek Harness (dsh)

Status: **proposal** · Target host: [deepseek-ai/deepseek-harness](https://github.com/deepseek-ai/deepseek-harness) (dsh) · Owner: mandubian
Home: `annexes/dsh/` in the compact repository — this plan governs the first annex; the annex file itself will live in the future `autonoetic-dsh` plugin repository

> Founding context: the [FOUNDING.md](../../FOUNDING.md)
> supersedes this plan's Phase 4 editorial work — the dsh composition ratifies
> the Compact and ships its enforcement register as an annex, rather than
> re-anchoring the autonoetic constitution clause-by-clause.

## 1. Purpose and scope

autonoetic is a one-maintainer Rust gateway whose maintenance cost exceeds what
a single person can sustain. Its durable asset is not the implementation — it is
a set of **concepts** for mechanically enforced agent safety:

- a layered approval/grant system with scoped targets, TTLs, and revocation
- a LoopGuard trip-state machine (12 trip conditions, suspend-not-cascade)
- sandbox orchestration with per-call policy and grant-curable mount denials
- mechanical severity gating on promotion records
- a **signed constitution** whose rules are coupled to named, resolvable
  enforcement (the differentiator — everything else is commodity)

This plan ports those concepts onto dsh as an **out-of-tree plugin set**. dsh is
a plugin-first TypeScript/Node runtime (Cordis meta-framework) whose extension
seams were explicitly designed for this shape of extension. The governing rule
is:

> **Concepts over code. Plugins over forks. Nothing ports that would require
> maintaining a fork of the host.**

### What is ported

Approval grants, exec replay cache, sandbox policy + mount grants, remote-access
static analysis, LoopGuard (detect/enforce), promotion gating, specialist agent
bundles, the constitution layer (verification, rule registry, enforcement
register, offline auditor), the artifact/layer/capsule storage trilogy
(Phase 6–7), the **rights layer** — verified self-model attestation, denial
envelopes, amendment machinery, hash-chained audit store (Phase 8) — and the
anti-confabulation session-facts tail. See §5 for the complete
concept-by-concept inventory, including what degrades.

### Framing: probe, not migration

This document was drafted as a migration plan; it should be executed as a
**probe**. Phases 0–1 (~5 weeks) are independently shippable, produce the
concept pages (valuable on any host), and answer *from code, not docs* whether
dsh's seams actually hold. Three outcomes are live at that gate:

1. **Continue the port** — seams hold, proceed to Phases 2–8.
2. **Prune autonoetic instead** — the commodity half (vault, dashboard, OFP,
   microvm driver, parts of the workflow engine) is deleted from the Rust
   workspace, keeping ~100% of the differentiator *and* the properties the
   port loses (process-level separation of powers, in-loop continuation,
   native hash chain). If dsh's churn tax looks worse than maintenance after
   Phase 1, this is the cheaper path to the same concept set.
3. **Both** — the plugins and concept pages port; a pruned gateway remains the
   reference implementation.

The plan does not decide this; Phase 1 produces the evidence that does.

### What is deliberately dropped

| Dropped | Why |
|---|---|
| Mid-turn suspend/resume with signed continuations (`continuation.rs`, continuation HMAC) | dsh has no suspend-latch concept; forking `agent-loop` recreates the maintenance trap. Approval blocks the tool call on the `approval/request` answerer instead — the turn parks, it does not checkpoint. |
| OpenFang Protocol federation (`autonoetic-ofp`) | No analog, no demand, orthogonal to the safety concepts. |
| Operator web dashboard, gateway CLI | dsh ships web/headless/ACP profiles; session-event replay covers the need. |
| Credential vault (`vault.key`, `credential_env` injection) | Adopt dsh's `CredentialRef` model (env-var references, per-operation resolution, value-free `describe()`). Encrypted-at-rest vault is a feature, not a concept. |
| SQLite gateway store, causal events *table* | The durable session log replaces the table as the **completeness** substrate ("model-visible ⟺ logged" — the auditor sees everything by construction). It is **not** tamper-evident (plain checksummed JSONL, no hash chaining), so Phase 8 adds a plugin-owned hash-chained event store beside it to restore P-8.1's integrity property. The grant store keeps its own small DB (see Phase 1). |
| Constitution **as containment** | The trust root is the operator in any harness. The constitution binds the publisher to auditable commitments; the doc must not overclaim. |

## 2. Host summary (what we build against)

dsh facts this plan relies on (verified against repo HEAD `c291e796`, 2026-09):

- **Plugin model**: Cordis services — a plugin declares `inject` requirements
  (service dependencies, enforced at load) and registers effects on typed
  `ctx` slots. All registrations are reversible effects. Composition is layered
  config: profiles → bundles → patches (`cordis.patch.yml` replaces any config
  row by id). Third-party plugins install via `dsh plugin add`.
- **Load-time failure doctrine**: "misconfiguration must fail loudly at load
  time or the earliest resolvable point." A plugin can and should refuse boot.
- **Tool seam** (`ctx.tools`): `register(definition)`, `restrict(filter)`,
  `guard(guard)`; events `tools/pre-execute` (return
  `allow`/`deny{reason}`/`ask`), `tools/execute` (around-wrapper),
  `tools/post-execute` (accept/block), `tools/result` (frozen outcome).
  **Tool arguments are frozen and logged before policy runs — plugins deny,
  ask, or replace outputs but never mutate inputs.**
- **Approval seam** (`ctx.approval`): waterfall answerer chain on
  `approval/request`; closed fail-closed `ApprovalOutcome` (`allowed-once`
  only native grant); per-session `ask`/`never` policy enforced *before*
  answerer dispatch; audit pair `approval/asked`/`approval/decided`.
- **Sandbox seam** (`ctx.sandbox`): `SandboxProvider.confine(argv, policy)` with
  per-call policy, enforcement-completeness reporting (`full`/`partial`),
  fail-closed on unavailability. Native backends: bwrap/Landlock, Seatbelt,
  Windows restricted tokens. E2B family shows replacing whole capability seams.
- **Agent seam** (`ctx.agents`, `ctx.subagents`): agent registry with
  `setFactory`; multi-provider subagent registry (personas, tool filters, depth
  limits, continuable children); experimental agent teams; `ctx.jobs` for
  background work; `agent.inject()` for model-facing context;
  `agent/turn-stopping` (serial) for turn-end accounting.
- **Persistence**: append-only versioned session log, `SessionPersistence` seam,
  JSONL+zstd provider with generation migrations, checkpoint-policy plugin
  flushing before model requests and side-effecting tools, crash repair on
  `ctx.agents.resume()`.
- **CI culture**: generated-and-verified catalogs (`gen-tool-catalog`,
  `gen-config-catalog`, …) each with a `verify-*` CI gate.
- **Maturity**: v0.1.5-rc, MIT, developer preview, explicit
  compatibility-breaking warnings, no security audit (SAFETY.md), and
  **external PRs are not accepted** (CONTRIBUTING.md) — every upstream fix is
  a wait, a fork, or a workaround.

**Version policy for this port**: pin an exact dsh version range in every
package manifest; the constitution (Phase 4) records the verified composition
(`dsh --dump-config` boot tree) so a user can check they run what was blessed.

## 3. Deliverable layout

One repository, `autonoetic-dsh`, pnpm workspace, TypeScript ESM, Node ≥ 22.
Each package is an independently installable dsh plugin.

```
autonoetic-dsh/
  packages/
    grant-store/        # shared persistence for grants + fingerprints (no dsh dependency)
    approval/           # @autonoetic/dsh-approval     — layered grants (Phase 1)
    sandbox-docker/     # @autonoetic/dsh-sandbox-docker — SandboxProvider (Phase 2)
    remote-access/      # @autonoetic/dsh-remote-access — static analysis policy (Phase 2)
    loopguard/          # @autonoetic/dsh-loopguard    — trip-state detection + deny (Phase 3)
    promotion/          # @autonoetic/dsh-promotion    — promotion.record + severity gate (Phase 3)
    specialists/        # @autonoetic/dsh-specialists  — subagent persona bundle (Phase 5)
    artifacts/          # @autonoetic/dsh-artifacts    — content store, refs, digest-bound approvals (Phase 6)
    layers/             # @autonoetic/dsh-layers       — directory images + supply-chain gate (Phase 6)
    session-facts/      # @autonoetic/dsh-session-facts — anti-confabulation volatile tail (Phase 6)
    capsule/            # @autonoetic/dsh-capsule      — signed agent provenance + import (Phase 7)
    rights/             # @autonoetic/dsh-rights       — attestation, denial envelopes, audit chain, amendments (Phase 8)
    constitution/       # @autonoetic/dsh-constitution — boot verification + rule registry (Phase 4)
  auditor/              # offline log auditor (Node CLI, not a plugin)
  docs/
    constitution/       # constitution.md versions + recompute tooling (ported from autonoetic)
    register/           # generated enforcement register + verify script
  cordis.patch.yml      # blessed composition overlay (documented, signed artifact)
```

Bundles are declared via `dsh.bundle` in each `package.json` so a single
profile line composes the full set; the constitution plugin's `inject`
requirements make partial composition fail loudly (Phase 4).

## 4. Phases

Estimates are solo full-time weeks and assume dsh familiarity from Phase 0.

### Phase 0 — Foundations (1–2 wks)

**Goal**: concept port map + one working end-to-end plugin to validate the
toolchain.

Work items:
1. Port the concept inventory into `docs/` here: one page per concept,
   implementation-agnostic (approval layers, LoopGuard trip taxonomy, mount
   grants, promotion evidence rule, constitution coupling). These pages are the
   durable asset; code cites them.
2. Skeleton repo: pnpm workspace, vitest, one trivial plugin (a
   `tools/pre-execute` deny-by-allowlist gate, per the dsh extension cookbook)
   installed via `dsh plugin add` into the headless profile, with a vitest suite
   running against a composed harness.
3. Version-pinning + CI skeleton: build, test, `verify-*`-style gates, dsh
   version range check.

**Acceptance**: plugin blocks/asks on a demo tool in a composed profile; CI
green; concept pages reviewed.

### Phase 1 — Layered approval & grants (3–4 wks)

**Goal**: the five-layer dedup from `docs/wiki/approval-system.md`, as one
plugin. This is the highest-value, best-fitting piece.

Seams used: `tools/pre-execute`, `approval/request` (answerer),
`tools/result` (outcome observation for budget accounting), grant-store.

Work items:
1. **Fingerprint normalization** — port the exec-cache canonicalization from
   `runtime/approved_exec_cache.rs` (URL literal / IP / host-constant
   extraction, arg canonical forms) to TS with golden-vector tests generated
   from the Rust suite's fixtures.
2. **Grant store** (`packages/grant-store`) — small embedded store (SQLite via
   `better-sqlite3` or JSON+fsync; choose in Phase 0 spike) holding:
   session grants, grant targets, exec-cache entries, revocations. Schema
   mirrors `session_approval_grants` / `session_approval_grant_targets`:
   pattern type (`ExactHost`, `HostSuffix`, `HostAndPort`, `UrlPrefix`),
   scope (`root`/`session`), `expires_at`, budget.
3. **Layer evaluation order** (same as autonoetic, checked in
   `tools/pre-execute`):
   1. exec cache (fingerprint-level, cross-session, concrete patterns only,
      `default_grant_ttl_secs` — 24h default, 0 disables)
   2. plan grants (materialized session grants)
   3. session grants (target-level, scope-aware, expiry)
   4. existing approved/pending approvals
   5. flood cap (`max_pending_approvals_per_root`, default 50) → reject with
      `approval_flood`
4. **Answerer integration**: unmatched calls return `{kind:'ask'}`; the
   plugin's `approval/request` answerer materializes an
   `allowed-once`/session-grant on operator approval, records
   `approval/asked`/`decided` (native audit events), and enforces the flood cap
   *before* dispatch.
5. **Denial envelopes (Ri-0.3 shape)** — a convention adopted here and
   mandated for every later plugin that can refuse: each denial carries the
   responsible rule ID plus machine-readable lawful next moves
   (`available_actions`), so agent self-correction works without prompt
   memory. Cheap to state now, impossible to retrofit later.
6. **Revocation**: a `grants.revoke` CLI command (dsh commands seam) + causal
   note into the session log; revocation kills matching grants and cache
   entries.
7. **LoopGuard cooperation**: report denials to the loopguard plugin (Phase 3)
   so approval flailing counts against the failure budget.

**Explicitly not ported**: continuation HMAC, in-flight suspension. The ask
blocks the tool call; the turn parks on the answerer.

**Acceptance tests** (vitest): layered dedup order; TTL expiry; each target
pattern class; scope isolation (session-scoped grant invisible to sibling
session); revocation; flood cap; fingerprint golden vectors; every denial
payload carries a rule ID and at least one lawful next move; a full
deny→ask→approve→replay-hit cycle.

### Phase 2 — Sandbox policy & remote access (2–3 wks)

**Goal**: docker sandbox provider, mount-grant cure-on-retry, network-access
static analysis.

Work items:
1. **`@autonoetic/dsh-sandbox-docker`**: implement
   `SandboxProvider.confine(argv, policy)` as a Docker backend (per-call
   container, workspace ro/rw binds per policy, no-network default). Report
   enforcement completeness honestly (`full` when the daemon confirms the
   config). Fail closed on daemon unavailability — never passthrough.
2. **Mount grants** (the #1002 analog): a denied call carrying undeclared
   mount requests is rejected with a machine-readable denial signature; on
   operator approval the plugin materializes a `session_mount_grants` row
   (canonical-path prefix coverage, per-row ro ceiling, same TTL/scope/revocation
   machinery as Phase 1); the resolver cures the matching denial on retry.
   Protected-path and missing-path declarations are terminal, never grantable.
3. **`@autonoetic/dsh-remote-access`**: port `runtime/remote_access.rs`
   (static analysis of shell/file args for network-access patterns) to
   `tools/pre-execute`; findings route through the Phase 1 grant layers so
   "this command needs network" is approvable per-host, not per-command.
4. **Host-fs deny-list**: port the sensitive-file masking concept as
   provider-level bind configuration (the `.gateway` deny-list becomes the
   docker provider's default masked-paths set, sourced from constitution
   config).

**Acceptance tests**: confinement matrix (network off, fs ceiling honored);
mount-grant cure cycle; denial of protected paths; remote-access detection
golden vectors; sandbox-unavailable = fail-closed.

### Phase 3 — LoopGuard, promotion gate, response validation (2–3 wks)

**Goal**: progress/failure accounting with mechanical trips; the evidence rule.

Work items:
1. **`@autonoetic/dsh-loopguard`**: port `runtime/guard.rs` +
   `classify_tool_result` accounting policy to TS.
   - Fingerprint tracking in `tools/pre-execute`; outcome accounting in
     `tools/result` (frozen outcome — no ambiguity).
   - Port the 12 trip conditions: NoMeaningfulProgress (default 10),
     ToolFailureBudget (8/tool), RotatingPollingPattern (≤6 fingerprints/16),
     ChildFailureBudget (5, +2 loop penalty), RedundantRosterPolling,
     LlmFailureBudget (3), WorkflowTerminal, RecurringUnrecoverableError,
     RepeatedIrrecoverableRejection, RepeatedSpawnIdentity,
     RedundantAnnotationLoop, IrrecoverableGateFlailing.
   - **Semantics without a suspend latch**: behavioral trips (the
     `is_session_repairable()` classes) → `deny` further calls + corrective
     prose via `agent.inject()`, cleared on the next inbound user signal
     (repair budget 3); deterministic trips → deny-all +
     `agent/turn-stopping` halt with the trip reason in the model-visible
     message. This is abort-with-explanation, not suspend — document the
     fidelity loss in the concept page.
   - Config via dsh settings; the trip taxonomy is exported for the
     constitution register (Phase 4) and for classification tests.
2. **`@autonoetic/dsh-promotion`**: register a `promotion.record` tool
   (`ToolRuntime.register`) with the mechanical gate: reject `pass=true` with
   any error/critical finding; reject `pass=true` with `warning` findings
   lacking non-empty `evidence`. **No `warnings_acknowledged` boolean — the
   evidence field is the only mechanical proof.** Enforce in
   `tools/pre-execute` on the tool itself so even the registration site can't
   bypass it.
3. **Response validation** (stretch): a `tools/post-execute` block decision
   for structurally invalid tool results, feeding the loopguard error budget.

**Acceptance tests**: each trip condition in isolation (synthetic tool-result
streams); repair-budget spending; deterministic vs behavioral classification;
promotion gate truth table including the evidence edge cases.

### Phase 4 — Constitution layer (3–4 wks) — *the differentiator*

**Goal**: bring the ratified [compact.md](../../compact.md)
into force on dsh. The re-anchoring and genesis work this phase once
contained is superseded by the founding plan (Phases A–E there); this
phase consumes its output. dsh's host properties make the binding clean:
load-time failure doctrine, Cordis service requirements (enforced
`inject`), verified-catalog CI culture, and the durable session log as
audit substrate.

Work items:
1. **Ratify and bind**: adopt the Compact's signed body; author the **dsh
   annex** — conformance declaration (provided [C] capabilities, adopted
   [O] clauses), the enforcement register (every bound clause → enforcing
   plugin → verifier), and the role mapping (Enforcer = the plugin
   composition, Subjects = agent sessions, Principals = operator
   accounts, Witnesses = offline auditors and peers). The statute layer
   absorbs the technical defaults (SLA terms, act classes, label
   formats) under enabling-clause trace.
2. **`@autonoetic/dsh-constitution`** — the meta-layer plugin:
   - **Boot verification**: verify digest + signature of the bundled
     constitution against `trusted_signers` in dsh settings; mismatch = load
     failure (host doctrine: fail loudly at load time).
   - **Rule registry**: exposes a `constitution` service; enforcement plugins
     register the rule IDs they enforce at load
     (`constitution.register('P-7.5', { plugin, evidence: '…' })`).
   - **Composition coupling**: the constitution plugin declares `inject`
     requirements on services provided *only* by the enforcement plugins
     (approval, loopguard, promotion, sandbox policy). Missing enforcement =
     boot failure, not degraded mode. This is the mechanical translation of
     "separation of powers": the composition either enforces the constitution
     or does not start.
   - **Blessed composition**: on successful boot, record the verified
     composition (dsh boot tree from `--dump-config`, plugin versions, dsh
     version range) as an attestation entry in the session log so users can
     check they run what was signed.
3. **Enforcement register** (`docs/register/`): generated catalog mapping every
   rule ID → enforcing plugin → cited test files. A `verify-register` CI gate
   fails when: a citation doesn't resolve, a registered rule lacks a citation,
   a constitution rule has no enforcement entry, or a plugin registers an
   unregistered rule ID. (Same shape as autonoetic's
   `every_parseable_citation_resolves`; same maintenance coupling — renames
   update register and code together.)
4. **Offline auditor** (`auditor/`): Node CLI that replays dsh session logs
   and checks constitution invariants over complete history — approval
   outcomes legal under the grant layers, trip-reason classifications valid,
   promotion records gate-compliant, retention honored. Emits a per-session
   attestation. dsh's "model-visible ⟺ logged" invariant makes the replay
   **complete** (nothing model-relevant escapes the log) — but the log is not
   tamper-evident, so integrity rests on the Phase 8 hash-chained store; the
   auditor verifies both and says which it is relying on.
5. **Trust-model honesty**: the constitution's guarantee section states what
   it binds (the publisher's releases, the composition) and what it cannot
   (a hostile operator editing composition or config). Port the
   `sentinel-baseline-guard` idea as a CI rule: PRs touching enforcement
   plugins and the register simultaneously require a `[baseline-update]`
   prefix.

**Acceptance tests**: boot fails on signature mismatch, on missing enforcement
plugin, on unregistered rule; bless/attestation roundtrip; register verify
gate catches a renamed test file; auditor detects a seeded violation in a
synthetic session log.

### Phase 5 — Specialist bundles (1 wk)

**Goal**: the 33 SKILL.md agent bundles as dsh subagent personas.

Work items:
1. Map `agents/specialists/*` (coder, executor, researcher, architect,
   debugger, evaluator, auditor) and `agents/lead` to `ctx.subagents`
   persona descriptors with per-persona tool filters (port the
   `excluded_tools` semantics).
2. Port the skill-trimming doctrine (the #1329–#1331 line of work): canonical
   sections live in one place; specialists dedup rather than restate.
3. Register as a bundle so one profile line composes the roster; depth limits
   and the no-recursive-spawn rule from the dsh subagent contract.

**Acceptance**: each persona spawnable with the intended tool surface; a
trim-dedup lint prevents skill restatement drift.

**Explicit non-goal**: the evolution offices (`specialized_builder`,
`evolution_steward`, `memory_curator`) are **not** personas and do not belong
in this phase — at home they are capability-bearing *actors* inside the
one-door revision pipeline (installer, steward, curator). They map to the
Phase 7 revision/capsule machinery and the Phase 8 amendment workflow, where
their capabilities can be gated mechanically rather than simulated by a
persona prompt.

### Phase 6 — Artifacts & layers (3–4 wks)

**Goal**: "what the agent made" and "what the agent runs in" as
tamper-evident, content-addressed units — the trust-boundary substrate the
constitution's review/install/exec rules attach to. Both are pure plugins: dsh
has no opinion on content addressing, and mounts are the sandbox provider's
job.

Work items:
1. **`@autonoetic/dsh-artifacts`** — plugin-owned content store (SHA-256 blobs
   + manifest records under the harness home; reuses the Phase 1
   `grant-store` persistence patterns):
   - Four-layer identity, ported intact: `sha256:` per-file handles,
     canonical digest over closure fields only (kind + sorted file handles +
     entrypoints + `(layer_id, name, mount_path, digest)` tuples — excludes
     id/timestamps/builder so the same closure hashes identically anywhere),
     manifest digest for local integrity, and opaque internal id vs.
     agent-facing `ar.<12hex>` ref.
   - Ref semantics: scoped (`session`/`workflow`/`global`), expirable,
     revocable, digest-pinned — resolution fails loudly on expiry, revocation,
     or manifest-digest mismatch ("possible tampering"). Scope filtering uses
     dsh session identity; "global" scope maps to harness-home-wide.
   - Tools: `artifact.build/inspect/resolve/diff/prepare` via
     `ToolRuntime.register`, with an agent-facing read-only projection for
     operator/evaluator inspection.
   - **Digest-bound approvals**: `artifact.prepare`'s exec fingerprint
     incorporates the canonical digest (the autonoetic invariant: approval
     replay identity binds to content, not to a mutable ref) — feeds the
     Phase 1 cache unchanged.
2. **`@autonoetic/dsh-layers`** (rides on the Phase 2 docker provider):
   - Content-addressed directory images: one opaque `tar.zst` per tree,
     whole-tree digest, dedup by content, size/file-count limits. The
     gateway stays deliberately dumb: capture, compress, hash, store,
     extract, mount.
   - A `layer.capture` tool implemented over the sandbox backend
     (post-command capture of declared/inferred paths), producing layers a
     build agent mounts into later sandboxes.
   - Mount support in the Phase 2 `SandboxProvider`: per-call read-only
     binds at declared `mount_path`s. **"Layers mount together, they never
     merge"** stays the documented discipline; composition happens only via
     runtime search paths.
   - **Supply-chain gate** (the `collect_layer_scope_issues` port): at mount
     time, compare each layer's build-time `approved_hosts` against the
     session's current network grants (Phase 1); any delta is a mount-scope
     issue requiring approval. Layers are digest-verified at build *and*
     mount; ambiguous digest prefixes fail loudly with candidates.
   - Artifact manifests incorporate layer digests — different deps yield a
     different canonical artifact digest, mechanically.
3. **Session-facts tail** (anti-confabulation, from the just-merged #1336
   line): a small `agent.inject()` plugin re-presenting task preview,
   visible artifact refs, and child-task statuses every turn in the
   trim-proof channel — the dsh analog of the volatile gateway notice. The
   task preview is single-line-sanitized (the PR #1336 review fix carries
   over as a test).

**Acceptance tests**: canonical-digest determinism (same closure built twice
→ same digest); ref tampering/expiry/revocation refusals; digest-bound cache
hit after content change = miss; layer capture→mount→supply-chain-delta gate
cycle; layer digest divergence refused; session-facts block stays within cap
and single-line.

### Phase 7 — Capsule & agent provenance (2–3 wks + one design decision)

**Goal**: agents as signed, secret-free, content-addressed exports with
mechanical emigration gating. On dsh the capsule does **not** compete with
`dsh plugin add` (behavior distribution already exists there) — its unique
value is signed provenance and being the mechanical brake on dsh's **core**
self-modification surface (`ctx.dynamicCordisRunner` — a shipped package
group with seven model-facing tools that let the agent define, run, and
remove dynamic Cordis packages at runtime, i.e. the most
constitution-hostile feature in the host; dynamic definitions are
process-memory-only and vanish on restart, but the hostile window is the
live session, which the constitution's boot-time coupling cannot see).

**Design decision required before code** (the one real architectural gap):
dsh has no persisted, immutable *agent revision* concept — agents are
presets/personas. Choose:
- (a) plugin-owned revision store: the capsule plugin defines a revision as
  {persona + skill bundle + tool restrictions + settings-patch slice +
  pinned artifact refs}, content-addressed `rev_sha256`-style, sessions pin
  at start; or
- (b) extend dsh's preset/patch system: revisions are frozen, signed
  snapshots of composition rows.
Recommendation: (a) — it keeps the revision immutable under plugin control
and doesn't fight the patch system's live-reload semantics.

Work items:
1. **Port the crypto and hygiene tooling**: Ed25519 signing/verification with
   `trusted_capsule_signers` statuses (`Verified` / `UntrustedSigner` /
   `MissingRequired`), manifest digest over canonical JSON with signature
   cleared (idempotent signing), secret scrubbing at export, strict
   archive-relative path validation (anti-traversal) at import.
2. **Modes**: `Thin` (refs only) and `Headless` ship. `Hermetic`/`Replay`
   stay dropped — at home they were honestly marked unbuilt; keep the
   autonoetic honesty invariant (refuse to emit a capsule claiming an
   embedding it doesn't carry).
3. **Mechanical gates**: export capability split (broad `CapsuleExport` vs
   scoped `SelfCapsuleExport` = own agent only); import requires the same
   privilege; export refuses when a session's egress posture doesn't permit
   the destination; dry-run validate-without-import.
4. **Constitution tie-in (Phase 4)**: the enforcement register gains a rule —
   any dynamically mounted Cordis plugin (self-modification surface) must
   originate from a signed capsule or be denied; the constitution plugin's
   `inject` requirements make the gate non-optional in a blessed composition.
5. **Install-pipeline essence**: revision promotion requires a reviewed
   artifact ref (Phase 6) for any non-empty capability set; promotion
   evidence stays digest-bound to the revision's content digest.

**Acceptance tests**: sign→verify roundtrip; untrusted-signer and
missing-signature import refusals; path-traversal archive rejection; scrub
golden vectors; self-modification gate denies unsigned dynamic plugins;
export refusal on closure-without-embedding (hermetic honesty).

### Phase 8 — Rights layer (3–4 wks) — *what makes it a constitution, not a compliance regime*

**Goal**: port the **contract half**. The constraint phases above make dsh
enforce rules; this phase keeps the enforced subject a *bound party* with
verifiable self-knowledge, a voice, and non-repudiable history. Without it
the port ships law without the machinery that makes authority legitimate.

Work items:
1. **Verified self-model (P-6.23)** — the project's namesake concept:
   - A plugin-owned identity key (Ed25519) signs a machine-readable state
     block at every turn boundary: remaining budget (Ri-0.4), active
     capabilities, pending gates (approvals/interactions/escalations), spawn
     depth, session ids, turn counter, **constitution digest**.
   - Injected via `agent.inject()`; a `self_describe` tool re-reads it
     on demand. The agent's system prompt teaches the block as *authoritative
     over the agent's own memory of these facts* — the functional-autonesis
     move. Freshness bound: a stale block is treated as an alarm, not truth.
2. **Denial envelopes (Ri-0.3), standardized** — the Phase 1 convention
   becomes law here: every refusal from every `@autonoetic` plugin names the
   rule ID and returns `available_actions` (machine-readable lawful next
   moves). A lint-style test walks all registered denial sites.
3. **Hash-chained audit trail (P-8.1 restored) — as a persistence decorator,
   not a parallel store.** Cordis's service-replacement semantics and dsh's
   single-writer append path make the *write path itself* the chain:
   - A `SessionPersistence` decorator wrapping the JSONL provider computes
     `entry_hash = H(prev_hash, seq, canonical_batch)` inside `append()` and
     verifies continuity inside `read()` — tamper detection at read time, one
     source of truth, no drift between a parallel store and the log.
   - The host has already built the hard parts: the in-memory append path is
     synchronous, reentrancy-guarded, and seq-stamped (`core/session`); the
     storage contract deep-snapshots each batch ("the checked value is
     exactly the value persisted") and enforces seq contiguity per append
     (`storage-contract.ts`) — the `prev_hash` check slots into the same
     contract position as `assertContiguous`.
   - Constitution-relevant event classes (denial, grant, revocation, trip,
     promotion, amendment) get `agent_id` bound into the hash (Ri-0.11
     non-repudiation), and the chain service is an `inject` dependency of
     every enforcement plugin (Phase 4 trick — no enforcement path can
     bypass the chain).
   - Verification observer in dsh's own **invariant-plugin idiom** (the host
     ships `invariant.ts` observers that watch `session/event` post-commit
     and fail loudly) — a broken chain halts the session like any other
     host-native invariant violation. Effects/disposers give seal-on-dispose
     records, so continuity is checkable across restarts and plugin
     lifecycle events are themselves on the record.
4. **Amendment machinery (Ri-0.8 + O-1)** — a `constitution.propose` tool
   (any agent, capability-free intake like Ri-0.18 at home), a persisted
   proposal queue with adjudication states and SLA counters, decider
   motivation enforcement on every accept/reject (O-1: blocking on
   rejections and elevated approvals), and friction-driven amendment
   invitations (repeated rule collisions surface as proposals). This is what
   makes the ported constitution *iterative* rather than static — the
   gateway self-accounts for its own discretion instead of silently
   accumulating it.
5. **Budgets as a right (Ri-0.4)** — budget consumption is never silent:
   meters live in the P-6.23 attestation, and a dsh settings surface exposes
   balances to the operator.

**Acceptance tests**: attestation signature + freshness alarm; stale-block
refusal; denial-envelope lint over all plugins; chain continuity verified at
read time under an injected well-formed tamper (decorated provider detects
the modified event and refuses); proposal lifecycle (proposed → adjudicated
with recorded motivation → ratified/refused); constitution digest in
attestation matches the boot-verified digest; seal-on-dispose record closes
the chain cleanly across a restart.

## 5. Full concept inventory — what survives, what degrades

The complete autonoetic concept surface checked against dsh, beyond the
phased items above. Verdicts: **full** = expressible without fidelity loss as
a plugin; **partial** = expressible with degraded semantics; **dropped** = by
rule in §1.

| Concept | dsh disposition | Verdict |
|---|---|---|
| Content visibility model (private/session/global, root-session grouping) | Folded into the Phase 6 content store (scope filtering at resolution) | full |
| Plan grants (plan envelope → session grant) | Phase 1 materialization on operator approval of a plan artifact | full |
| Anti-confabulation session-facts tail | `agent.inject()` every turn (Phase 6, item 3) | full |
| Anomaly flags + per-reporter flood cap | Plugin store + intake tool; flood cap identical to Phase 1's; adjudication workflow is convention | full (low priority) |
| Emergency stop / circuit breaker | Plugin: `AgentHandle.dispose()` (dispose is a capability), grant + mount revocation via Phase 1/2 stores, causal note into the session log. Process-tree kill differs (dsh cancels in-process) | full-ish |
| ScheduledAction approval gate | `ctx.jobs` + `tools/pre-execute` on job-spawning tools; per-job approval-before-run as a Phase 1 grant class | full-ish |
| Response validation (contract enforcement) | `tools/post-execute` block decisions, feeding LoopGuard error budgets (Phase 3 stretch) | full |
| Security sentinel, baseline guard | CI-side in this repo, host-agnostic; ported as `verify-*`-style gates | full |
| Human gate / approval delivery | `approval/request` answerer chain + dsh profiles/CLI; web-profile UX is dsh's | full |
| Wake notifications / turn-start signals | dsh inbox (`followup`/`steer`/`inject`) — native | full |
| Session checkpointing, compaction, session search | Native (durable log, compaction capability, session projections) | native |
| Observability redaction | `telemetry/*` event wrapping; scrub tooling shared with Phase 7 | full (low priority) |
| **Egress labeling / workspace taint** | Policy plugin checks on egress-capable tools (`web`, `subprocess`, fs) at `tools/pre-execute`. Weaker than home: no fs-provider-level taint unless the plugin replaces `ctx.fs` wholesale (E2B-style), which is possible but heavier. **Data-locality upside**: `agent/request` can reroute a labeled request to a local model before any bytes leave the machine — arguably a *stronger* egress semantic than autonoetic's, and worth its own analysis rather than a shrug | **partial** |
| Causal chain hash integrity (P-8.1) | Plugin-owned hash-chained event store beside the session log (Phase 8, item 3); auditor verifies continuity | full (restored by Phase 8; a loss without it) |
| Verified self-model / signed attestation (P-6.23) | `agent.inject()` + `self_describe` tool with plugin-owned signing key (Phase 8, item 1) | full (Phase 8) |
| Denial envelopes (Ri-0.3) | Structured denials with rule IDs + `available_actions`, standardized across plugins (Phase 1 item 5, mandated Phase 8) | full |
| Amendment machinery (Ri-0.8, O-1) | `constitution.propose` tool + adjudication queue + decider-motivation enforcement (Phase 8, item 4) | full (Phase 8) |
| Budgets as a right (Ri-0.4) | Meters in the attestation + settings surface; silent consumption refused (Phase 8, item 5) | full (Phase 8) |
| Eval/evidence pipeline (P-9.9 source) | Not ported as such: the Phase 3 promotion gate enforces evidence but nothing *produces* evaluator evidence. Dsh `ctx.jobs` + an evaluator persona can approximate the generator; a real eval harness is future work | **partial** |
| Knowledge/memory plane (visibility scopes, retention, curation) | No native analog with scopes; a memory plugin (dsh has memory providers) would need the scope+retention model layered on. Low priority for the safety story | **partial** (deferred) |
| Inter-agent messaging with pattern-scoped consent (P-11.5) | `agent.steer`/mailbox primitives exist; consent scoping is plugin state on top | full-ish (Phase 8+) |
| Script agents with typed IO contracts | dsh has no script-agent mode; closest is a persona with a code-exec tool. Deferred unless needed | **partial** (deferred) |
| Session forking | Native: `ctx.agents.create({seed, inheritedEventCount})` | native |
| Evolution offices (steward/curator/builder) | Capability-bearing actors of the Phase 7 revision pipeline + Phase 8 amendment flow — *not* personas (see Phase 5 non-goal) | full (via Phases 7–8) |
| **Workflow engine** (durable workflow store, parallel-join groups, retry policies, `side_effect_state`, `workflow_wait`) | dsh subagents have continuable children; agent teams (durable roster/task board/mailbox) are **experimental**; `ctx.jobs` gives durable background work. Long-running unattended durable workflows with join semantics degrade to the experimental surface | **partial — the biggest remaining gap after continuation** |
| Mid-turn continuation (HMAC suspend/resume) | No suspend-latch in the loop; fork would be required. **Worse than a plain park**: a session crashed while parked on an approval ask does not resume the ask — recovery appends a synthetic unknown-outcome tool result and a synthetic turn-end ("park, don't checkpoint" is the only mode) | dropped (§1) |
| Credential vault, OFP federation, operator dashboard | Adopt native equivalents / out of scope | dropped (§1) |

**Critical-breakage verdict, counted honestly.** As originally specced
(Phases 0–7 only), **five** things are lost relative to autonoetic, in
descending severity —

1. **Durable workflow join semantics** — long-running, crash-survivable
   multi-agent workflows with parallel joins ride dsh's *experimental*
   agent-teams surface. If that area churns or stalls, unattended
   long-horizon orchestration degrades to best-effort.
2. **Mid-turn continuation** — approval now blocks the tool call instead of
   checkpointing the turn; and a crash while parked does not resume the ask —
   recovery synthesizes an unknown-outcome result and closes the turn. A
   headless session awaiting operator approval holds a parked turn, not a
   serialized continuation.
3. **Process-level separation of powers** — at home the enforcer is a
   separate privileged process; on dsh the enforcement plugins run in-process
   and are one `cordis.patch.yml` edit away from being disabled. The Phase 4
   `inject` coupling is *prevention at composition time* (a non-enforcing
   composition refuses to boot), not a physical boundary — separation of
   powers becomes compositional. Attestation is detection, not prevention.
4. **Hash-chain integrity** — the session log is complete but forgeable;
   P-8.1's tamper-evidence is gone unless Phase 8 ships its parallel chained
   store. (Ri-0.11 — entrenched — explicitly rests on the hash chain.)
5. **Egress taint enforcement depth** — data-flow labels gate tool-level
   egress as before, but taint carried in workspace *files* is not
   fs-provider-enforced unless the plugin goes E2B-style and replaces the
   whole `ctx.fs` seam. Partially offset by `agent/request` data-locality
   rerouting, which autonoetic never had.

Phase 8 closes loss #4 outright and gives the rights machinery (attestation,
denial envelopes, amendment) a home; the other four are irreducible without
forking the host. Nothing else in the inventory is mechanically
inexpressible on dsh. The pattern is consistent: dsh's seams cover *storage,
mounts, tool interception, and composition* completely; they thin out exactly
where autonoetic reached into *loop, process, and physical-trust* semantics.

## 6. Effort summary

| Phase | Weeks | Core risk |
|---|---|---|
| 0 Foundations | 1–2 | dsh API churn under the pin |
| 1 Approval & grants | 3–4 | fingerprint port fidelity |
| 2 Sandbox & remote access | 2–3 | provider contract changes |
| 3 LoopGuard + promotion | 2–3 | no-suspend fidelity loss |
| 4 Constitution | 3–4 | depends on the founding plan's ratification output |
| 5 Specialists | 1 | — |
| 6 Artifacts & layers | 3–4 | canonical-digest port fidelity |
| 7 Capsule & provenance | 2–3 | revision-store design decision |
| 8 Rights layer | 3–4 | attestation freshness; chain-store performance |
| Residual plugins (anomaly flags, egress policy, response validation) | 1–2 | depth vs. value tradeoff |
| **Total** | **21–30** | |

Roughly two-thirds of a year of solo work for concept parity — constraint
*and* contract halves — minus the four irreducible degradations in §5,
against years of accumulated gateway maintenance. The phases are
independently shippable; the total is a ceiling, not a commitment; and the
Phase 1 decision gate (§1 "probe, not migration") can redirect the whole
effort toward a pruned autonoetic before the largest phases are paid for.

## 7. Risk register

| Risk | Mitigation |
|---|---|
| dsh pre-1.0 compatibility breaks | Pin exact versions; constitution attests the verified composition; upgrade is a reviewed, re-blessed event — not silent drift. |
| **Permanent host-tracking cost** | Upstream accepts no external PRs and breaks compatibility on purpose: every upgrade is a re-blessing event and every host bug is a wait, a fork, or a workaround. The plan prices building (~21–30 wks) but not this tail — it is the strongest argument for the pruned-autonoetic alternative at the Phase 1 gate. |
| No security audit of the host | Constitution guarantees phrase what *our* plugins enforce, not what the host contains; SAFETY.md posture quoted in the constitution's trust section. |
| Plugin seams change shape (hooks/middleware payloads) | All interception goes through the documented service seams (`tools/*`, `approval/request`, `SandboxProvider`), not private modules; a seam-contract test suite fails loudly on drift. |
| Fork temptation (mid-turn continuation, cron approval gates) | Out of scope by rule in §1. If a concept can't ship as a plugin, it waits or is dropped — a fork converts a maintenance problem into two. |
| Concept drift during porting | The Phase 0 concept pages are the spec; code PRs cite pages; the register's verify gate keeps citations resolving. |
| One-maintainer bus factor (again) | The plugin set is small (~6 packages), each independently useful; the constitution layer is optional composition, not a hard runtime dependency for other users of the plugins. |

## 8. Definition of done

A user on a pinned dsh version can `dsh plugin add` the bundle set and get:
layered approvals with scoped grants and revocation; a fail-closed docker
sandbox with mount grants and network-access analysis; loopguard enforcement
with the 12-trip taxonomy; mechanically gated promotion records; an
artifact/layer store making "what the agent made" and "what it runs in"
tamper-evident and digest-bound to approvals; signed capsules as the only
admitted source of agent self-modification; a signed constitution that
refuses to boot unless the composition enforces it; **and the rights layer —
a signed per-turn self-model the agent is taught to trust over its own
memory, denial envelopes with lawful next moves, a hash-chained audit trail
that survives a hostile editor, and an amendment channel that keeps the law
iterative** — with an offline auditor able to verify any past session against
the rules. Every rule in the constitution resolves to a passing test in CI,
and the whole thing is maintained by one person without forking the host.
