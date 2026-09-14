# Compact Disposition Ledger

**Phase B reconciliation, pass 1** — every clause of the predecessor
constitution (v2026.09.05, 204 clauses) mapped to its disposition toward
the [Compact draft](../compact.md). Method: per-clause rows;
dispositions decided at family grain with named per-clause overrides;
nothing silently vanishes — every row names its target or its reason.
Layers: **BODY** (Compact text) · **STATUTE** (implementing law, enabling-
clause trace, ordinary amendment) · **ANNEX** (runtime-specific binding) ·
**v0.2** (deferred candidate). Confirmation pass (Phase B completion)
reviews every row against full clause text, not heads.

| Predecessor | Theme (head) | Disposition | Layer | Compact target | Note |
|---|---|---|---|---|---|
| — | **Ri family** (22 clauses) | — | — | — | — |
| `Ri-0.1` | Every agent may inspect its own currently-active capabilities, budget state, pending gates | CARRIED | BODY | — | family disposition |
| `Ri-0.2` | Every agent may read its own causal chain and execution trace. The gateway does not hide a | CARRIED | BODY | — | family disposition |
| `Ri-0.3` | Every rejection names the rule ID that caused it. No agent is ever told "denied" without b | CARRIED | BODY | — | family disposition |
| `Ri-0.4` | Every agent knows its budget balances truthfully and in real time. Consumption is never si | CARRIED | BODY | — | family disposition |
| `Ri-0.5` | An agent placed in degraded mode (P-7.18) is told it is degraded, with the rule ID and evi | CARRIED | BODY | — | family disposition |
| `Ri-0.6` | Capabilities declared in an agent's manifest are not silently changed mid-session. Any cha | CARRIED | BODY | — | family disposition |
| `Ri-0.7` | An agent may explicitly request session termination. The gateway commits outstanding causa | CARRIED | BODY | — | family disposition |
| `Ri-0.8` | Any agent holding the `ConstitutionalProposal` capability may submit an amendment proposal | CARRIED | BODY | — | family disposition |
| `Ri-0.9` | Where practical (time, process state, absence of immediate harm), the gateway notifies the | CARRIED | BODY | — | family disposition |
| `Ri-0.10` | Every agent has access to the full text of the constitution it is operating under, address | CARRIED | BODY | — | family disposition |
| `Ri-0.11` | Every action an agent performs (tool call, message, proposal, spawn, termination request) | CARRIED | BODY | — | family disposition |
| `Ri-0.12` | Sessions terminate only through a declared, closed list of reasons: (a) agent-initiated ex | CARRIED | BODY | — | family disposition |
| `Ri-0.13` | An agent's internal reasoning — scratchpad tokens, chain-of-thought, internal planning, un | CARRIED | BODY | — | family disposition |
| `Ri-0.14` | When a child task reaches a terminal state (succeeded, failed, cancelled, aborted) or reso | CARRIED | BODY | — | family disposition |
| `Ri-0.15` | Every gate output — every `GateKind` (approval, user_input, escalation, wiki_proposal), to | CARRIED | BODY | — | family disposition |
| `Ri-0.16` | The divergence Sentinel is **observational**: it classifies session trajectory (`Healthy`/ | ANNEX | ANNEX | runtime extension | divergence Sentinel is autonoetic-specific observational tech; portable essence (health classification is advisory, never enforcement) noted for statute |
| `Ri-0.17` | An agent may request export of its own cognitive capsule for migration to another gateway. | CARRIED | BODY | — | family disposition |
| `Ri-0.18` | Any agent may file an anomaly report (`anomaly_flag`) at any time, **without holding any c | CARRIED | BODY | — | family disposition |
| `O-1` | A decision owes a **motivation**, graduated by stakes. A **rejection/abort**, or an **appr | CARRIED | BODY | — | family disposition |
| `O-2` | Every decision is **attributed** to the deciding principal (id + kind) on the causal chain | CARRIED | BODY | — | family disposition |
| `O-6` | A proposal review authority owes every Ri-0.8 proposal a **recorded decision** (`approved` | CARRIED | BODY | — | family disposition |
| `O-7` | An anomaly review authority owes every Ri-0.18 flag a **recorded decision** (`confirmed`/` | CARRIED | BODY | — | family disposition |
| — | **P-1 family** (11 clauses) | — | — | — | — |
| `P-1.1` | Every tool call matches a declared capability; no overrides. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.2` | High-risk capabilities (`NetworkAccess`, `CodeExecution`, `AgentSpawn`) reject bare-string | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.3` | Only agents holding `AgentRevision` may promote revisions. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.4` | `ReadAccess` / `WriteAccess` scopes are enforced by glob match. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.5` | `NetworkAccess` is scoped by host allowlist. The gateway owns the detected-host contract: | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.6` | `SandboxFunctions` applies to MCP tools only; native tools use their own capability. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.7` | `AgentSpawn.max_children` bounds concurrent spawns. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.8` | `CredentialAccess` is scoped by service pattern. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.9` | `CodeExecution` patterns match against command strings. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.10` | Missing capability returns permission error, never advisory. | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| `P-1.11` | Unknown tool names deny by default (not silent-allow). | STATUTE | STATUTE | capability taxonomy under R-5/D-7 | typed-capability rule; taxonomy is statute, the principle is D-7 |
| — | **P-2 family** (29 clauses) | — | — | — | — |
| `P-2.1` | Remote network access across all networked tools (`sandbox_exec`, `credential.*`, `web.*`) | STATUTE | STATUTE | Gates Act under I-5 | remote-access approval = the Phase-1 dsh plugin |
| `P-2.2` | Approval requests are persisted with unique IDs. | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.3` | Identical operations within a session deduplicate. The `GateService` centralizes dedup via | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.4` | Approved hosts auto-approve subsequent calls within the root session, scoped to the approv | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.5` | Approval response surfaces `detected_hosts` for operator visibility. | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.6` | Fingerprint-identical approved executions skip re-approval until the cache entry expires: | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.7` | Only concrete targets (URLs, IPs) cache; opaque patterns always re-prompt. | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.8` | High-risk promotion requires evaluator AND auditor pass. | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.9` | `promotion_record` evidence is trace-based for execution roles (`unit_test_runner`, `seale | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.10` | Gate-suspended turns (approval, user interaction, escalation) checkpoint via `YieldReason` | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.11` | Suspended turns exceeding timeout mark the task failed while preserving continuation for e | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.12` | Deciders (human operators, autonomous reviewer agents, or policy engines) approve/reject g | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.13` | `user_ask` creates a gate via `GateService` with `GateKind::UserInput` and checkpoints the | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.14` | `user_ask` is refused if the workflow has active children or pending gates (approvals, esc | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.15` | Spawn payload is preserved verbatim across approval resume. | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.16` | Promotion of revision N computes `cap_set(N) \ cap_set(N-1)`. A non-empty delta triggers a | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.17` | The auditor and evaluator backing a promotion must be **distinct agent identities** (not m | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.18` | All execution suspension points awaiting external input (approvals, user interactions, esc | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.19` | Gate enrichment messages (`gate_messages`) are append-only and recorded on the causal chai | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.20` | Agents acting as gate deciders require the `GateDecider` capability. The capability scope | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.21` | When an agent-decider cannot determine whether to approve or reject a gate (insufficient c | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.22` | When a revision carries federation-role verdicts, promotion runs the **FullJury** gate: it | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.23` | Session approval grants expire after a configured TTL; an expired grant no longer auto-app | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.24` | Operator approval hardening on high-risk gates: (a) a minimum dwell time before the confir | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.25` | **Promotion is fail-closed.** Whether a revision may be promoted, and what it must satisfy | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.26` | **All executed gate roles must pass.** When a federation gate role (`static_evaluator`, `u | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.27` | A **session capability envelope**, locked by operator decision, pre-authorizes tool calls | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.28` | **Smoke-test gate for new agents.** New agents declaring `NetworkAccess` or `CodeExecution | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| `P-2.29` | **Promotion attempt exhaustion gate.** Too many rejected promotion attempts for the same ` | STATUTE | STATUTE | Gates Act under I-5 | approval classes, dedup layers, grant scopes/TTL, flood caps = implementing law |
| — | **P-3 family** (10 clauses) | — | — | — | — |
| `P-3.1` | Sandboxes default to `--unshare-all` — no network, no PID namespace. | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.2` | `--share-net` for `sandbox_exec` follows the per-exec operator network grant: an operator- | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.3` | Script-mode sandbox execution uses identical isolation policy. | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.4` | SDK bridge paths from inside the sandbox are relative-only, no traversal. | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.5` | Network errors inside the sandbox (URLError, ConnectionError, DNS) are detected and return | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.6` | Layer mounts are read-only. | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.7` | Sandbox resource quotas are operator-declared and fail-shut: the gateway refuses to start | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.8` | Destructive commands (`sudo`, `rm -rf`, `dd`, `mkfs`, shell injection) are blocked before | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.9` | Dependency-manager package names are restricted to safe alphanumerics. | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| `P-3.10` | Promotion-gate execution (sealed evaluator / auditor runs) is denied network access regard | CARRIED+STATUTE | BODY+STATUTE | CF-1/CF-2 + Confinement Defaults Act | essence in body; isolation defaults are statute |
| — | **P-4 family** (15 clauses) | — | — | — | — |
| `P-4.1` | Secrets never enter agent context; gateway injects at sandbox or HTTP boundary. | STATUTE | STATUTE | Secret-Mediation Act under R-10 | 'secrets never enter subject context' — candidate body principle for v0.2 |
| `P-4.2` | Vault uses AES-256-GCM; the whole vault is one ciphertext blob with a random 96-bit nonce | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.3` | Master key is required from `AUTONOETIC_VAULT_KEY` or `AUTONOETIC_VAULT_KEY_PATH`; absence | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.4` | Credential IDs (`cred_*`) are mechanical references, never secret material. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.5` | `credential_request` requires `CredentialAccess` matching the service. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.6` | `credential_setup` `user_prompt` step suspends the session for operator approval. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.7` | `credential_request` response is redacted; raw secrets never returned. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.8` | Secrets are zeroized from memory after injection. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.9` | `credential_env` passes secrets as env vars resolved server-side. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.10` | Refresh tokens live in vault, never exposed to agents. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.11` | `credential_refresh` 401 auto-retry fires at most once per request. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.12` | Secret-shaped text in responses is blocked by `prohibited_text_patterns`. | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.13` | Logs, traces, digests, and LLM prompts are redacted via `redact_text_for_logs` before stor | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.14` | Redaction happens **before** causal-chain append (ordering invariant). | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| `P-4.15` | The gateway probes vault master-key presence at startup, emits a causal event recording th | STATUTE/DROP | STATUTE+ANNEX | Secret-Mediation Act under R-10/I-5 | the mediation principle is statute; vault crypto detail dropped (runtime-specific; dsh CredentialRef) |
| — | **P-5 family** (14 clauses) | — | — | — | — |
| `P-5.1` | Messages to child agents pass `io.accepts` enforcement at ingress. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.2` | Coercion is deterministic only. The LLM-coercion fallback was removed: `SchemaEnforcementM | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.3` | Failed coercion returns an actionable `hint`. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.4` | Every enforcement decision is logged (pass/coerce/reject). | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.5` | Response contract checks `required_artifacts`, `max_artifacts`, `max_total_size_mb`, `max_ | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.6` | Contract verification uses authoritative runtime state (content-store byte sizes, successf | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.7` | `output_schema` validates JSON final replies. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.8` | Validation failures may trigger the bounded output-repair loop — strictly opt-in (manifest | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.9` | `min_artifact_builds` is verified via execution traces. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.10` | `artifact_inspect` accepts explicit `art_*` IDs only; implicit `impl_task-*` handles are r | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.11` | Native tool errors use a uniform error envelope. The base shape is `{ok:false, error_type, | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.12` | `error_type: fatal` triggers session abort; recoverable types do not. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.13` | Child → parent tool results validate against `io.returns` on egress. | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| `P-5.14` | Every workflow-relevant tool/task failure is classified into a `failure_class` from a clos | CARRIED+STATUTE | BODY+STATUTE | MA part + IO Contracts Act | typed-IO mechanics are statute |
| — | **P-6 family** (26 clauses) | — | — | — | — |
| `P-6.1` | Session budget is role-agnostic per `session_id`. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.2` | `max_llm_rounds` gates before each LLM call; incremented after a real provider call. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.3` | `max_tool_invocations` gates before each tool batch; all calls in a batch reserve together | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.4` | `max_wall_clock_secs` checked at LLM pre-check. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.5` | `max_session_price_usd` enforced via OpenRouter catalog estimates. When catalog is unavail | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.6` | OpenRouter catalog fetches with ~1h TTL; disabled by env. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.7` | Prompt-budget breakdown is logged before every LLM call. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.8` | `system_prompt` and `tool_definitions` max-tokens enforced independently. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.9` | Context governor cascades reduction strategies (tool-schema compression, hierarchical caps | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.10` | Tool tiers (Core, Workflow, Specialized) filter the visible tool set by runtime state. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.11` | Tool schemas compress after turn 0 (`{}` placeholders). | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.12` | Foundation layers included based on agent capabilities. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.13` | Checkpoints cover every yield reason with `turn_counter`, `loop_guard_state`, and budgets. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.14` | `EmergencyStop` never auto-resumes; `ApprovalRequired` resumes via continuation. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.15` | Turn continuation atomically replays the pending tool call on approve. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.16` | `session.fork` branches from a named checkpoint. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.17` | Checkpoint retention prunes per configuration. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.18` | Workflow orchestration persists `WorkflowRun` on first `agent_spawn`. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.19` | Child task message/metadata is preserved across approval boundaries. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.20` | User chat addressed to a child `session_id` rewrites to the root session. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.21` | Tree-wide budget aggregated across all descendants of a root session. On exhaustion the ga | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.22` | Continuation chain depth is bounded. | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.23` | At every turn boundary, the gateway injects a signed machine-readable state block (remaini | CARRIED | BODY | I-3 + R-1 | the attestation mechanism of an entrenched right |
| `P-6.24` | Duplicate durable operations (install, promote, rollback, artifact-backed build stages) ar | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.25` | Stage-local retry is opt-in and bounded. Workflow-bound tasks track a per-stage `retry_cou | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| `P-6.26` | Durable operations report `side_effect_state` from a closed enum (`none`, `committed`, `un | CARRIED+STATUTE | BODY+STATUTE | R-4/I-3 + Limits Act | budget truth and attestation in body; numeric limits are statute |
| — | **P-7 family** (22 clauses) | — | — | — | — |
| `P-7.1` | Emergency stop is reachable by operators, gateway security policy, or agents with `Emergen | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.2` | Emergency stop kills child processes (SIGKILL), aborts tokio tasks, cancels pending approv | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.3` | Emergency stop deletes session grants and revokes session envelopes for the root session. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.4` | Emergency stops are recorded in the `emergency_stops` table. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.5` | Loop guard trips on `max_tool_failures` per tool (configurable; current default in `docs/r | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.6` | Fatal errors (`error_type: fatal`) abort the session regardless of loop-guard budget. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.7` | Consecutive LLM steps without a successful tool result trip the loop guard. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.8` | Concurrent spawns beyond capability limit return `quota_exceeded`. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.9` | `AgentSpawn.max_children` is enforced per agent. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.10` | Scheduler rejects sub-threshold intervals (`min_interval_secs`); sub-10s requires script-m | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.11` | Approval timeout fails the task while preserving the continuation for operator-driven resu | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.12` | Promotion gate has no escape hatch; passes require real evaluator + auditor records. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.13` | Unresolved dependencies block promotion for high-risk agents. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.14` | `force_complete` refuses `Succeeded` without real child-session evidence. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.15` | Spawn-chain depth is bounded system-wide; child `max_depth` ≤ parent's. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.16` | Orphan children are reaped when the parent session terminates: their in-flight task record | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.17` | Approval flood cap — pending approvals per root session bounded. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.18` | A **degraded** session state exists between healthy and emergency-stopped. In degraded mod | CARRIED | BODY | I-8 + R-5 | degraded-mode honesty |
| `P-7.19` | The loop guard also trips when successful tool calls make no *semantic* progress. The gate | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.20` | The loop guard trips when child-task failures in a session reach `loop_guard.max_child_fai | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.21` | The sandbox→gateway SDK bridge enforces request-rate and payload-size limits. | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| `P-7.22` | Sandbox-escape attempts are counted per session — kernel-denied syscalls (seccomp), denied | CARRIED+STATUTE | BODY+STATUTE | A-8/I-8/R-5 + LoopGuard Act | emergency->A-8, degraded honesty->I-8; trip conditions are statute (enforcement plugin) |
| — | **P-8 family** (19 clauses) | — | — | — | — |
| `P-8.1` | Causal chain is append-only JSONL with hash-chain integrity (`entry_hash`, `prev_hash`). | CARRIED | BODY (core) | I-2 | entrenched in predecessor; carried entrenched in A-2 |
| `P-8.2` | Every session, LLM, tool, script, gateway, and memory event is logged with a unique `event | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.3` | `event_id` is the universal correlation key across traces, reports, and observability. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.4` | Events are mirrored to SQLite (`causal_events`) without payload truncation. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.5` | Execution traces record `exit_code`, `stdout`, `stderr`, `duration_ms`, `success`, `error_ | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.6` | Retention policies apply at gateway startup (0 = keep forever). | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.7` | Live digest is updated in real time (`session_digest.md`). | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.8` | Published session reports are catalogued in `published_session_reports` and queryable via | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.9` | Promotion records persist `artifact_id`, `evaluator_pass`, `auditor_pass`, `evidence`, and | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.10` | Capability accretion across revisions is detectable via `promotion_history`. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.11` | `runtime.lock` includes compile-time source fingerprint and runtime binary SHA. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.12` | Sessions refuse to start when `runtime.lock` gateway section disagrees with the running ga | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.13` | Schema enforcement decisions are logged with target, result, transformations, and enforcer | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.14` | Knowledge records carry `owner_agent_id`, `writer_agent_id`, `source_ref`; visibility is e | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.15` | Session approval grants are tracked by `(root_session_id, host)` and included in cleanup a | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.16` | Causal-chain append is `fsync`-durable before any state transition that depends on it. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.17` | Retention pruning emits a `retention.pruned` causal event. | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.18` | Every tool call may carry a top-level `intent` field (free-text, 1-2 sentences, max 500 ch | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| `P-8.19` | Every gate resolution (approve, reject, cancel, timeout) records `decided_by` with the ful | CARRIED+STATUTE | BODY+STATUTE | I-2/I-7 + Records Act | chain + verification in body; event taxonomy is statute |
| — | **P-9 family** (16 clauses) | — | — | — | — |
| `P-9.1` | Activation requires all three stages. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.2` | `agent.install` is not a runtime tool. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.3` | Revisions are immutable and content-addressed. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.4` | The alias registry is the sole source of truth for the "active" revision. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.5` | Candidate revisions are runnable via explicit `agent_ref` without promotion. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.6` | Revision statuses (`candidate`, `ready`, `archived`) bound what can promote; rejection is | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.7` | Eval gating — if required, a revision mismatch rejects promotion. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.8` | `SKILL.md` is parsed at install; capabilities, limits, and execution mode extracted. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.9` | High-risk capabilities trigger approval gate on promotion. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.10` | External Python imports are detected at install. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.11` | Dependency files with no layers block promotion for high-risk agents. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.12` | `BundleHealthReport` is returned in `create_from_intent` responses. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.13` | Agent bundle signatures are verified at `agent_revision_create`. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.14` | Trust domains constrain cross-domain agent spawns. | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.15` | **Single door.** Every surface that activates an agent — moves an alias to a revision — pa | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| `P-9.16` | **Import provenance.** An agent installed from an external source durably records, on its | STATUTE | STATUTE | Capability-Change Act under R-5/D-7 | promotion/install procedure; fail-closed essence carried; binds on dsh via capsule/revisions (port Phase 7) |
| — | **P-10 family** (9 clauses) | — | — | — | — |
| `P-10.1` | Remote agents authenticate via Bearer token. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.2` | Content API is exposed over HTTP for remote content access. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.3` | JSON-RPC ingress requires `AUTONOETIC_SHARED_SECRET`. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.4` | Remote agents inherit all approval gates. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.5` | Layer mounts in remote execution are fetched and cached before sandbox use. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.6` | OFP federated exchanges preserve cross-gateway causal context: `agent_message` request/res | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.7` | No agent may resolve its own gate requests, whether directly or via a delegated agent it s | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.8` | Shared-secret comparison is constant-time. | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| `P-10.9` | Every gateway publishes a `constitution_digest` — SHA-256 over the canonical constitution | ANNEX | ANNEX | transport security per runtime | principle "authenticated ingress" -> Identity Act under I-1; mechanics are runtime-specific |
| — | **P-11 family** (8 clauses) | — | — | — | — |
| `P-11.1` | Parent → child messages route through `agent_spawn`. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.2` | Child `clarification_needed` status returns as a tool result; parent re-spawns. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.3` | `agent_message` is peer-to-peer between active sessions. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.4` | Messages auto-inject into the target session at turn start. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.5` | `agent_message` respects two mechanical gates: the sender-side `policy.can_message_agent` | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.6` | Spawned children inherit `root_session_id` from parent. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.7` | `max_children` is enforced at spawn. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| `P-11.8` | Spawn payload is preserved across approval and continuation. | CARRIED+STATUTE | BODY+STATUTE | MA-4 + Inter-Addressing Act | consent-scoped address in body; routing mechanics statute |
| — | **P-15 family** (3 clauses) | — | — | — | — |
| `P-15.1` | Content carrying an egress label must never be included in a request to a sink the label e | DEFERRED | v0.2 | candidate [C:egress-labeling] capability part | draft lacks an egress part by design; port plan Phases 2/8 carry it on dsh; v0.2 candidate |
| `P-15.2` | Any surface that moves session-derived bytes off-machine — sandbox `share_net`, gateway we | DEFERRED | v0.2 | candidate [C:egress-labeling] capability part | draft lacks an egress part by design; port plan Phases 2/8 carry it on dsh; v0.2 candidate |
| `P-15.3` | A label widens only via an explicit, operator-approved **declassification grant** — conten | DEFERRED | v0.2 | candidate [C:egress-labeling] capability part | draft lacks an egress part by design; port plan Phases 2/8 carry it on dsh; v0.2 candidate |

## Tally

Rows: 204. By primary layer: ANNEX: 10, BODY: 119, BODY (core): 1, STATUTE: 71, v0.2: 3.

Interpretation: the **BODY carries the predecessor's rights, obligations,
records, attestation, and emergency/degradation disciplines** (the whole
correction core, entrenched per A-2); the **STATUTE layer absorbs the bulk
of the predecessor's operational provisions** (gates, limits, capability
taxonomies, promotion procedure, loop-guard trips) — which is precisely
where the predecessor's P-clauses belonged all along; only genuinely
runtime-bound material lands in annexes, and one honest gap is declared
(egress labeling, deferred to a v0.2 capability part).
