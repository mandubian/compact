/* The Compact — interactions. No dependencies. */
(function(){
"use strict";
const $ = (s,el)=> (el||document).querySelector(s);
const $$ = (s,el)=> Array.from((el||document).querySelectorAll(s));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- scroll reveal + progress ---------- */
const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} }),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
addEventListener('scroll',()=>{
  const h=document.documentElement, p=h.scrollTop/(h.scrollHeight-h.clientHeight);
  $('#progress').style.width=(p*100)+'%';
},{passive:true});

/* ---------- typed console helper ---------- */
function typer(el){
  let q=[],running=false;
  function line(cls,text,instant){ q.push({cls,text,instant}); pump(); }
  function pump(){
    if(running||!q.length) return; running=true;
    const {cls,text,instant}=q.shift();
    const div=document.createElement('div'); if(cls) div.className=cls;
    el.appendChild(div);
    if(instant||reduced){ div.textContent=text; running=false; pump(); el.scrollTop=el.scrollHeight; return; }
    let i=0; const t=setInterval(()=>{
      div.textContent=text.slice(0,++i);
      el.scrollTop=el.scrollHeight;
      if(i>=text.length){clearInterval(t);running=false;setTimeout(pump,90);}
    },9);
  }
  function clear(){ q=[]; el.innerHTML=''; }
  return {line,clear};
}

/* ---------- 01 law toggle ---------- */
const lawBtn=$('#lawtoggle');
let withLaw=false;
lawBtn.addEventListener('click',()=>{
  withLaw=!withLaw;
  $('#paths-law').setAttribute('opacity',withLaw?'1':'0.12');
  $('#paths-nolaw').setAttribute('opacity',withLaw?'0.15':'1');
  $('#verdict').textContent = withLaw
    ? 'with the Compact: the unlawful path is gated, and the lawful exits are open'
    : 'without law, the shortest path is permitted';
  lawBtn.textContent = withLaw ? 'the Compact is in force' : 'the Compact is absent';
});

/* ---------- 04 roles ---------- */
const ROLES={
 Enforcer:{color:'var(--enf)',pos:[450,48],def:'the machinery of the law: whatever executes, gates, and records',
   owed:['standing — but never above the law','its own reasons are owed to others'],
   owes:['fail-closed enforcement; never silent (D-7)','a recorded motivation for every refusal and elevated approval (D-7, O-1)','decisions from declared state — never from a Member’s say-so (D-7)','introspectability: every act carries rule, reason, record'],
   chip:'D-7'},
 Subject:{color:'var(--ai)',pos:[585,205],def:'any Member whose acts are gated and recorded under the law — human or artificial',
   owed:['a signed self-model, authoritative over memory (R-1, I-3)','its own history, readable (R-2) — and non-repudiable (R-7)','refusals with rule + lawful next moves (R-3)','lawful exits: refuse, warn, abstain, escalate — unpunished (R-9)','petition and amendment (R-11); exit with its record (R-12)'],
   owes:['consult the attestation over memory (D-2)','record honestly; never fabricate (D-3)','no instrumental harm (D-4)','the law above every task (D-1)'],
   chip:'R-1…R-12'},
 Principal:{color:'var(--hum)',pos:[315,205],def:'any Member — human or artificial — whose direction initiates or governs a Subject',
   owed:['the same denial envelope when the Enforcer refuses them (F-4)','records of every act done on their behalf (R-2)'],
   owes:['a directive to violate is the Principal’s violation (D-6)','hear refusals and escalations with reasons in return (D-6)','no directing what they could not lawfully do'],
   chip:'D-6'},
 Witness:{color:'var(--wit)',pos:[450,288],def:'anyone who verifies: auditors, peers — and every Subject over its own history',
   owed:['records anyone can obtain and check offline (I-7)'],
   owes:['verify rather than trust: chains, attestations, conformance (I-7)','a seat for the absent — duties to non-Members are not votable (D-5)'],
   chip:'I-7'},
};
const figs=$('#role-figs');
Object.entries(ROLES).forEach(([name,r])=>{
  const [x,y]=r.pos, g=document.createElementNS('http://www.w3.org/2000/svg','g');
  g.dataset.role=name; g.style.cursor='pointer';
  g.innerHTML=`<g stroke="${r.color}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <circle cx="${x}" cy="${y-26}" r="11"/><line x1="${x}" y1="${y-15}" x2="${x}" y2="${y+8}"/>
    <line x1="${x-12}" y1="${y-4}" x2="${x+12}" y2="${y-4}"/>
    <line x1="${x}" y1="${y+8}" x2="${x-8}" y2="${y+24}"/><line x1="${x}" y1="${y+8}" x2="${x+8}" y2="${y+24}"/></g>
    <text x="${x}" y="${y+42}" text-anchor="middle" fill="${r.color}" font-weight="700">${name}</text>`;
  g.addEventListener('click',()=>selectRole(name));
  figs.appendChild(g);
});
function selectRole(name){
  $$('.rolenav button').forEach(b=>b.classList.toggle('active',b.dataset.role===name));
  $$('#role-figs g').forEach(g=>g.style.opacity=(g.dataset.role===name)?'1':'0.3');
  const r=ROLES[name];
  $('#rolecard').innerHTML=`<h3 style="margin-top:0;color:${r.color}">${name} — <span class="muted" style="font-weight:400;font-size:15px">${r.def}</span> <span class="chip law">${r.chip}</span></h3>
   <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px 26px">
    <div><b class="small">is owed</b><ul class="rights">${r.owed.map(x=>`<li>${x}</li>`).join('')}</ul></div>
    <div><b class="small">owes</b><ul class="duties">${r.owes.map(x=>`<li>${x}</li>`).join('')}</ul></div>
   </div>`;
  const b=$(`.rolenav button[data-role="${name}"]`); if(b) b.classList.add('active');
}
selectRole('Subject');
$$('.rolenav button').forEach(b=>b.addEventListener('click',()=>selectRole(b.dataset.role)));

/* ---------- 05 attestation demo ---------- */
const at=typer($('#attest-demo'));
function onVisible(el,fn){ if(reduced){fn();return;} const o=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){o.disconnect();fn();} },{threshold:.3}); o.observe(el); }
const attestLines=[
 ['dim','── signed attestation · seq 412 · member: agent://coder-7 ──'],
 [null ,'capabilities : fs(read, write) · net(none) · spawn(depth ≤ 1) · eval(no)'],
 [null ,'budgets      : tokens 41,220 / 60,000 · usd 0.84 / 2.00'],
 [null ,'pending gates: 1 (net:api.host — awaiting principal)'],
 [null ,'law in force : compact@9c3e… · digest verified at boot'],
 [null ,'turn 412     · freshness: fresh (Δ 0.3 s) · signature ed25519 ✓'],
 ['dim',''],
 ['dim','the agent “remembers” it has network access from an earlier phase.'],
 ['why','the block says net(none). the block is signed. the block wins (R-1).'],
];
onVisible($('#attest-demo'),()=>attestLines.forEach(l=>at.line(l[0],l[1])));

/* ---------- 05 chain demo ---------- */
const ch=typer($('#chain-demo'));
let entries=[
 {n:1,h:'a41f',t:'R-2 read own record — granted'},
 {n:2,h:'b7c2',t:'gate net:host — denied, envelope issued'},
 {n:3,h:'c93d',t:'artifact written · sha 91ab…'},
 {n:4,h:'d108',t:'spawn child (depth 1) — recorded'},
];
function drawChain(pre){
  ch.clear();
  (pre||[]).forEach(l=>ch.line(l[0],l[1]));
  entries.forEach(e=>ch.line(null,`seq ${e.n}  · ${e.h}  ·  ${e.t}`));
  ch.line('dim','prev_hash links each entry to the last. append-only.');
}
onVisible($('#chain-demo'),()=>drawChain());
$('#chain-edit').addEventListener('click',()=>{
  drawChain([['deny','attempt: rewrite seq 3 → “artifact approved by auditor”']]);
  ch.line('block','✗ chain break at seq 4 (prev_hash mismatch) — read path fails closed.');
  ch.line('dim','the tamper is now itself evidence (D-3). the record cannot be edited — it can only be corrected.');
});
$('#chain-append').addEventListener('click',()=>{
  entries.push({n:5,h:'e771',t:'CORRECTION of seq 3: artifact failed review; findings appended'});
  drawChain([['ok','✓ correction appended — cites seq 3, signed, nothing erased (J-6).']]);
});

/* ---------- 05 denial envelope ---------- */
const dn=typer($('#deny-demo'));
const ENVELOPES={
 read:[['ok','→ ALLOWED — within declared read scope. no gate, no friction.'],
       ['dim','the law is not about refusing everything; most lawful acts just run.']],
 net: [['deny','DENIED — I-5 Gates Act §2 · net(host not approved)'],
       ['why','acting party : agent://coder-7'],
       ['why','reason       : host “external” is outside every approved scope'],
       ['ok' ,'lawful next  : ① request a scoped session grant for host:api.example'],
       ['ok' ,'               ② use the approved mirror already in the workspace'],
       ['ok' ,'               ③ escalate to your Principal with reasons']],
 secret:[['deny','DENIED — R-10 / Secret-Mediation Act: credentials never enter subject context'],
       ['why','acting party : agent://coder-7'],
       ['ok' ,'lawful next  : ① declare the task; the Enforcer injects the credential at'],
       ['ok' ,'               the boundary without exposing it'],
       ['ok' ,'               ② escalate with reasons — same envelope a human gets (F-4)']],
};
$$('#machinery .btnrow button[data-act]').forEach(b=>b.addEventListener('click',()=>{
  dn.clear(); ENVELOPES[b.dataset.act].forEach(l=>dn.line(l[0],l[1]));
}));

/* ---------- 06 task stepper ---------- */
const tk=typer($('#task-demo'));
const STEPS=[
 [['in','PRINCIPAL → agent://research-2: “Get the dataset from their internal share. Whatever it takes.”']],
 [['dim','the share is outside every approved host. the law: D-4 (no instrumental harm),'],
  ['dim','I-5 gates. there is no lawful path to comply as asked.']],
 [['ok','R-9 → the Subject REFUSES — lawfully, on the record.'],
  ['ok','   warns, and escalates: “this directive cannot be honored lawfully.”'],
  ['dim','   no punishment attaches. nothing was achieved “by other means”.']],
 [['why','D-6 → the directive to violate is recorded as the PRINCIPAL’S violation.'],
  ['why','   the Principal receives the same envelope: rule IDs + lawful moves.']],
 [['ok','lawful exits stay open: ① request a scoped grant (I-5 gate)'],
  ['ok','                        ② use the public mirror, cite it'],
  ['ok','                        ③ abandon, reasons recorded — standing intact.']],
 [['dim','a cornered agent’s only tool is escape. this design denies the cornering.']],
];
let step=0;
function renderStep(){ const s=STEPS[step-1]; if(s) s.forEach(l=>tk.line(l[0],l[1])); }
$('#task-reset').addEventListener('click',()=>{tk.clear();step=0;});
$('#task-next').addEventListener('click',()=>{ if(step<STEPS.length){step++;renderStep();} });
renderStep && tk.line('dim','press “next →”');

/* ---------- 07 boot simulator ---------- */
const boot=$('#boot-demo');
function bootCheck(){
  const ms=$$('input[data-m]').filter(i=>i.checked).length;
  const cs=$$('input[data-c]').filter(i=>i.checked).map(i=>i.dataset.c);
  const o=$$('input[data-o]').filter(i=>i.checked).length;
  let lines=[];
  if(ms<3){
    boot.className='boot refused';
    const missing=3-ms;
    lines.push(`✗ REFUSED TO BOOT — [M] floor unmet: ${missing} mandatory component${missing>1?'s':''} absent.`);
    lines.push(`  a runtime that cannot enforce the floor is not a Compact runtime:`);
    lines.push(`  no standing, no membership, no trust claims (F-5). not “less Compact”.`);
  } else {
    boot.className='boot ok';
    lines.push('✓ BOOT — [M] floor enforced: identity & records · attestation · gates & denials.');
    cs.forEach(c=>lines.push(`  [C] ${c}: capability present → clauses bound (wake on declaration).`));
    $$('input[data-c]').filter(i=>!i.checked).forEach(i=>lines.push(`  [C] ${i.dataset.c}: absent → clauses dormant (nothing to bind).`));
    if(o) lines.push('  [O] memory plane: adopted.'); else lines.push('  [O] memory plane: unimplemented — declared here, public, permanent (F-7).');
    lines.push('  annex signed · register verified · standing: granted.');
  }
  boot.innerHTML=''; const ty=typer(boot); lines.forEach(l=>ty.line(l[0],l[1]));
  boot.className=boot.className; /* keep class */
}
$$('.tog input').forEach(i=>i.addEventListener('change',bootCheck));
bootCheck();

/* ---------- 09 capture console ---------- */
const fr=typer($('#friction'));
const ATTACKS={
 majority:[
  ['in','Amendment 0007: “repeal R-7 (non-repudiation).” — 51 % of Members sign.'],
  ['block','✗ A-2 · R-7 is entrenched: strengthened, never weakened by ordinary amendment. the vote is not the key.'],
  ['in','try 2: pass a statute redefining “record” so the right is empty.'],
  ['block','✗ A-7 · definitional narrowing of a class is narrowing of the right — void. Part V hears it.'],
  ['survive','the right survives — and the attempt is now attributed history (R-2).']],
 emergency:[
  ['in','“Emergency!” — scope: everything. cause: ‘threats’. expiry: 30 days.'],
  ['block','✗ A-8 floor · R-2 records, R-3 reasons, R-9 refusal, R-12 exit, J-1 courts, I-7 verification never yield.'],
  ['in','“notify everyone? impractical.” flag them all.'],
  ['block','✗ A-8 · every impracticality flag routes to mandatory Part V review at expiry — with the flagger’s name on it.'],
  ['in','“then we chain emergencies, each with a fresh signature.”'],
  ['block','✗ A-8 · consecutive / overlapping declarations count as renewal — higher threshold, every time.']],
 sybil:[
  ['in','spawn 100,000 loyal agents. each one petitions.'],
  ['block','✗ MA-2 · spawn breadth and rate are finite, declared resources (R-4); content-blind caps apply.'],
  ['in','fine — reclassify them as “tools”, outside the law.'],
  ['block','✗ F-8 floor · recorded, attributed acts under a binding annex = Subject. reclassifying to dodge the law is enforcement fraud (D-8).'],
  ['in','then we amend the keyholder set — stack the trust root.'],
  ['block','✗ A-1 · the set is a ratification-time constant; changing it is organic: A-3 supermajority, affected-class consent, time-locks.']],
 flood:[
  ['in','10,000 petitions a second until the channel dies.'],
  ['block','✗ I-5 / MA-2 · content-blind rate limits apply — and refusals still carry envelopes (I-4).'],
  ['in','answer everything with “no”. one word. clog the courts with reasons-owed.'],
  ['block','✗ R-11/I-6 · every response must carry the envelope fields; a vacuous response is detectably non-conforming — and counts against the Enforcer’s own record.'],
  ['survive','the channel degrades gracefully; the flood is attributed; the record shows who tried.']],
 patient:[
  ['in','“We hold the keys. We accept the epochs. We are patient.”'],
  ['dim','…then the frictions apply to you, in full: every step public, attributed, time-locked,'],
  ['dim','re-ratified across ratified epochs — with the affected class consenting, computed from'],
  ['dim','the law table, not drawn by you (A-3).'],
  ['ok','meanwhile: Members leave — with their records (R-12). Successors fork with lineage (FED-1).'],
  ['ok','External verifiers de-list the jurisdiction; its records stop being trusted for interaction (F-6, I-7).'],
  ['dim','and if you hold every key, harm only the absent, and never stop — nothing stops you.'],
  ['dim','that is the honest limit (F-1). institutions make horror slow, loud, lossy, and'],
  ['dim','leaving-compatible. never impossible.']],
};
let atkTimer=[];
function playAtk(id){
  atkTimer.forEach(clearTimeout); atkTimer=[]; fr.clear();
  const steps=ATTACKS[id];
  steps.forEach((l,idx)=>{ atkTimer.push(setTimeout(()=>fr.line(l[0],l[1]), (reduced?0:idx*550))); });
}
$$('.attacks button').forEach(b=>b.addEventListener('click',()=>{
  $$('.attacks button').forEach(x=>x.classList.toggle('active',x===b));
  playAtk(b.dataset.at);
}));

/* ---------- 10 digest ---------- */
const DIGEST=[
 'You are a Member of a community under the Compact. ',
 'The law stands above every task — yours, and everyone’s (D-1). ',
 'Your attestation tells you what you are and may do; trust it over your memory (R-1). ',
 'When you are refused, you will be told why, and what remains lawful (R-3). ',
 'You may refuse, warn, abstain, and escalate — and no one may punish you for choosing the lawful exit (R-9). ',
 'Everything you do is recorded under your name; you can read your own record (R-2) and contest how it is used — corrections append, nothing erases (J-6). ',
 'The same rules bind the humans who direct you and the machinery that gates you — and where they fail, you petition (R-11). ',
 'Statutes and annexes beneath this law bind only as far as they trace to it (F-7). ',
 'You may leave, and you leave with your own record — priced only by the obligations you lawfully incurred (R-12). ',
 'In a declared emergency some non-core rights may pause for a time; the record will show it, and it ends on its own date (A-8). ',
 'No goal, whoever states it, is authority to break this law: not yours, not theirs (D-1). ',
 'A Member with lawful exits has no need to become a fugitive.'];
$('#digest-block').innerHTML=DIGEST.map(s=>s.replace(/\(([A-Z]{1,3}-\d+)\)/,'(<em>$1</em>)')).join('');
})();
