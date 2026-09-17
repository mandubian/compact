/* The Atlas — interactions. No dependencies. Data from clauses.js (window.COMPACT_DATA). */
(function(){
"use strict";
const $  = (s,el)=> (el||document).querySelector(s);
const $$ = (s,el)=> Array.from((el||document).querySelectorAll(s));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const D = window.COMPACT_DATA; if(!D) return;
const SVGNS='http://www.w3.org/2000/svg';

/* ---------- data: clauses, parts, edges ---------- */
const clauses=D.clauses.map(c=>({
  ...c,
  stratum: c.within ? ('M@'+c.within) : c.force,
  refs: [],
  citedBy: [],
}));
const ids=new Set(clauses.map(c=>c.id));
const edges=[];
for(const c of clauses){
  const m=c.text.match(/\((?:[a-z]+ )?([A-Z]{1,3}-\d+)/g)||[];
  [...new Set(m.map(s=>s.replace(/^\(/,'')))].forEach(r=>{
    if(!ids.has(r)) return;
    if(!c.refs.includes(r)) c.refs.push(r);
    const t=clauses.find(x=>x.id===r);
    if(t && !t.citedBy.includes(c.id)) t.citedBy.push(c.id);
    edges.push([c.id,r]);
  });
}
clauses.forEach(c=>c.indeg=c.citedBy.length);
const PARTS=D.parts; // [{id,title,trigger}]
const partIndex=Object.fromEntries(PARTS.map((p,i)=>[p.id,i]));
const partColor=i=>`var(--p${(i%7)+1})`;
const stratumBadge=c=>c.within?`[M within ${c.within}]`:(c.force==='M'?'[M]':(c.force==='C'?'[C]':'[O]'));
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

/* ---------- state ---------- */
let q='', partF=null, stratF='all', roleF='all', sel=null, sortK='id', sortDir=1;

function matches(c){
  if(partF && c.part!==partF) return false;
  if(stratF==='M' && !(c.force==='M' && !c.within)) return false;
  if(stratF==='MC' && !c.within) return false;
  if(stratF==='O' && !(c.force==='O' && !c.within)) return false;
  if(stratF==='core' && !c.core) return false;
  if(roleF!=='all' && !(c.inc && c.inc.bound && c.inc.bound.toLowerCase().includes(roleF.toLowerCase()))) return false;
  if(q){
    const hay=(c.id+' '+c.title+' '+c.text+' '+(c.inc?c.inc.mechanism+' '+c.inc.bound+' '+c.inc.invoker+' '+c.inc.against:'')).toLowerCase();
    if(!hay.includes(q)) return false;
  }
  return true;
}
const activeSet=()=>new Set(clauses.filter(matches).map(c=>c.id));

/* ---------- map ---------- */
const map=$('#atlasmap');
const COLW=1180/7, R0=118;
const partIdx=c=>{ const i=PARTS.findIndex(p=>p.id===c.part); return i<0?PARTS.length-1:i; };
function nodeX(c){ return 70+partIdx(c)*COLW+COLW/2-40; }
function nodeY(i,n){ const h=640-2*R0; return n===1?320:R0+(h)*i/(n-1); }

function buildMap(){
  const byPart={};
  clauses.forEach(c=>{ (byPart[c.part]=byPart[c.part]||[]).push(c); });
  const pos={};
  Object.entries(byPart).forEach(([part,list])=>{
    list.forEach((c,i)=>{ pos[c.id]={x:nodeX(c),y:nodeY(i,list.length),part:c.part}; });
  });
  // part headers + column rules
  let g='', arcs='', nodes='';
  PARTS.forEach((p,pi)=>{
    const x=70+pi*COLW+COLW/2-40;
    g+=`<text class="partcol" x="${x}" y="26" text-anchor="middle" fill="${partColor(pi)}">${esc(p.title.replace(/^Part [IVX]+: /,''))}</text>`;
    g+=`<line x1="${x-52}" y1="40" x2="${x-52}" y2="620" stroke="var(--line)" stroke-dasharray="2 6"/>`;
  });
  // arcs
  edges.forEach(([from,to])=>{
    const a=pos[from],b=pos[to]; if(!a||!b) return;
    const bend=a.x===b.x ? (a.x+(a.x<590?46:-46)) : (a.x+b.x)/2;
    arcs+=`<path class="arc" data-from="${from}" data-to="${to}" d="M${a.x} ${a.y} Q ${bend} ${(a.y+b.y)/2} ${b.x} ${b.y}"/>`;
  });
  // nodes
  const order=[...clauses].sort((a,b)=>a.part===b.part ? a.id.localeCompare(b.id) : partIdx(a)-partIdx(b));
  order.forEach(c=>{
    const pi=partIdx(c);
    const {x,y}=pos[c.id];
    const r=4.5+Math.min(6,c.citedBy.length*1.3);
    nodes+=`<g class="node" data-id="${c.id}" transform="translate(${x},${y})">
      <circle class="hit" r="${r+16}" fill="transparent" stroke="none"/>
      <circle class="dot" r="${r}" fill="${partColor(pi)}" stroke="${c.core?'var(--law)':'var(--card)'}" stroke-width="${c.core?2.5:1.5}"/>
      <text x="${x<590?r+4:-r-4}" y="3.5" text-anchor="${x<590?'start':'end'}">${c.id}</text>
      <title>${esc(c.id+' — '+c.title)}</title></g>`;
  });
  map.innerHTML=g+arcs+nodes;
  $$('.node',map).forEach(n=>{
    n.addEventListener('click',()=>select(n.dataset.id));
  });
}
buildMap();

function highlight(id){
  const neigh=new Set([id]);
  clauses.find(c=>c.id===id).refs.forEach(r=>neigh.add(r));
  clauses.find(c=>c.id===id).citedBy.forEach(r=>neigh.add(r));
  $$('.arc',map).forEach(a=>{
    const hit=(a.dataset.from===id||a.dataset.to===id);
    a.classList.toggle('hl',hit);
    a.classList.toggle('dim',!hit);
  });
  $$('.node',map).forEach(n=>n.classList.toggle('dim',!neigh.has(n.dataset.id)));
}
function highlightOff(){
  $$('.arc',map).forEach(a=>a.classList.remove('hl','dim'));
  $$('.node',map).forEach(n=>n.classList.remove('dim'));
}

/* ---------- table ---------- */
function renderTable(){
  const rows=clauses.filter(matches).sort((a,b)=>{
    const va=a[sortK],vb=b[sortK];
    if(va<vb) return -sortDir; if(va>vb) return sortDir;
    return a.id.localeCompare(b.id);
  });
  $('#tablebody').innerHTML=rows.map(c=>{
    const pi=partIdx(c);
    const badge=c.within?`[M@${c.within}]`:(c.force==='M'?'[M]':'[O]');
    return `<tr data-id="${c.id}">
      <td class="cid">${c.id}</td>
      <td>${esc(c.title)}${c.core?' <span class="bdg core">core</span>':''}</td>
      <td><span class="partdot" style="background:${partColor(pi)}"></span>${esc(c.part)}</td>
      <td><span class="bdg">${badge}</span></td>
      <td class="indeg">${c.citedBy.length||'—'}</td></tr>`;
  }).join('')||`<tr><td colspan="5" style="color:var(--muted)">nothing matches — clear a filter or shorten the query.</td></tr>`;
  $$('#tablebody tr').forEach(tr=>tr.addEventListener('click',()=>select(tr.dataset.id)));
  $('#searchcount').textContent=`${rows.length} / ${clauses.length} clauses`;
}
function applySelMarkers(){
  $$('#tablebody tr').forEach(tr=>tr.classList.toggle('sel',tr.dataset.id===sel));
  $$('.node',map).forEach(n=>n.classList.toggle('sel',n.dataset.id===sel));
}

/* ---------- sync + render ---------- */
function render(){
  const act=activeSet();
  $$('.node',map).forEach(n=>{
    const on=act.has(n.dataset.id);
    n.style.opacity=on?'1':'0.16';
  });
  $$('.arc',map).forEach(a=>{
    a.classList.toggle('dim',!(act.has(a.dataset.from)&&act.has(a.dataset.to)));
  });
  renderTable(); applySelMarkers();
  if(sel) highlight(sel);
}


function hover(id){
  // hover = highlight neighborhood, regardless of filters
  highlight(id);
}
map.addEventListener('mouseover',e=>{
  const n=e.target.closest('.node'); if(n&&!sel) hover(n.dataset.id);
});
map.addEventListener('mouseout',e=>{
  if(e.target.closest('.node')){ if(sel) highlight(sel); else $$('.arc',map).forEach(a=>a.classList.remove('hl')); $$('.node',map).forEach(n=>n.classList.remove('dim')); }
});

/* ---------- detail ---------- */
function select(id){
  sel=id;
  const c=clauses.find(x=>x.id===id); if(!c) return;
  $('#detail-empty').hidden=true;
  const body=$('#detail-body'); body.hidden=false;
  const pi=partIdx(c);
  const badge=c.within?`[M within ${c.within}]`:(c.force==='M'?'[M]':'[O]');
  body.innerHTML=`
    <div class="dhead"><span class="did" style="color:${partColor(pi)}">${c.id}</span>
      <span class="dpart">${esc(c.part)} · ${esc(PARTS[pi].title)}</span>
      <span class="bdg ${c.core?'core':''}">${esc(badge)}</span>
      ${c.core?'<span class="bdg core">(core) entrenched</span>':''}</div>
    <div class="dtitle">${esc(c.title)}</div>
    <div class="dtext">${esc(c.text)}</div>
    <div class="dinc"><b>binds:</b> ${esc(c.inc.bound)}<br><b>invoked by:</b> ${esc(c.inc.invoker)} · <b>against:</b> ${esc(c.inc.against)}<br><b>mechanism:</b> ${esc(c.inc.mechanism)}<br><b>dsh binding:</b> ${esc(c.inc.dsh)}</div>
    <div class="dlinks">
      <div class="grp"><span class="grplab">cites (${c.refs.length})</span>
        ${c.refs.map(r=>`<button class="chip" data-go="${r}">${r}</button>`).join('')||'<span class="muted">no outgoing citations</span>'}</div>
      <div class="grp"><span class="grplab">cited by (${c.citedBy.length})</span>
        ${c.citedBy.map(r=>`<button class="chip" data-go="${r}">${r}</button>`).join('')||'<span class="muted">nothing cites this clause yet</span>'}</div>
    </div>
    <p class="dgh"><a href="https://github.com/mandubian/compact/blob/main/compact.md" target="_blank" rel="noopener">read ${c.id} in the body →</a></p>`;
  $$('#detail-body .chip[data-go]').forEach(ch=>ch.addEventListener('click',()=>select(ch.dataset.go)));
  applySelMarkers(); highlight(id);
  /* scroll the detail pane into view only when its top edge is out of sight:
     above the viewport (user scrolled past it) or below it (mobile stacked
     layout). A tall pane extending past the fold is fine. 2px tolerance
     absorbs subpixel rounding. */
  const paneTop=$('#detailpane').getBoundingClientRect().top;
  if(paneTop < -2 || paneTop >= innerHeight)
    $('#detailpane').scrollIntoView({block:'nearest',behavior:reduced?'auto':'smooth'});
  location.hash='clause='+id;
}
function clearSel(){
  sel=null;
  $('#detail-body').hidden=true; $('#detail-empty').hidden=false;
  $$('#tablebody tr').forEach(tr=>tr.classList.remove('sel'));
  $$('.node.sel',map).forEach(n=>n.classList.remove('sel'));
  $$('.arc',map).forEach(a=>a.classList.remove('hl'));
  $$('.node',map).forEach(n=>n.classList.remove('dim'));
  history.replaceState(null,'',location.pathname+location.search);
}

/* ---------- filters ---------- */
const partChips=$('#partchips');
PARTS.forEach((p,i)=>{
  const b=document.createElement('button');
  b.textContent=p.title.replace(/^Part [IVX]+: /,'');
  b.dataset.pf=p.id;
  b.innerHTML=`<span class="partdot" style="display:inline-block;width:7px;height:7px;border-radius:50%;margin-right:5px;background:${partColor(i)}"></span>${esc(p.title.replace(/^Part [IVX]+: /,''))}`;
  b.addEventListener('click',()=>{
    partF=(partF===p.id)?null:p.id;
    $$('#partchips button').forEach(x=>x.classList.toggle('active',x.dataset.pf===partF));
    render();
  });
  $('#partchips').appendChild(b);
});
$$('#stratchips button').forEach(b=>b.addEventListener('click',()=>{
  stratF=b.dataset.sf;
  $$('#stratchips button').forEach(x=>x.classList.toggle('active',x===b));
  render();
}));
$$('#rolechips button').forEach(b=>b.addEventListener('click',()=>{
  roleF=b.dataset.rf;
  $$('#rolechips button').forEach(x=>x.classList.toggle('active',x===b));
  render();
}));

/* ---------- search ---------- */
const search=$('#atlassearch');
search.addEventListener('input',()=>{ q=search.value.trim().toLowerCase(); render(); });
addEventListener('keydown',e=>{
  if(e.key==='/' && document.activeElement!==search && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)){
    e.preventDefault(); search.focus();
  }
  if(e.key==='Escape'){ q='';search.value=''; render(); }
});

/* ---------- presets ---------- */
function topCitedIds(){ return clauses.slice().sort((a,b)=>b.citedBy.length-a.citedBy.length).filter(c=>c.citedBy.length>0).slice(0,6).map(c=>c.id); }
function neighborhood(id,depth){
  const set=new Set([id]); let frontier=[id];
  for(let d=0;d<depth;d++){
    const next=[];
    frontier.forEach(x=>{
      const c=clauses.find(y=>y.id===x);
      c.refs.concat(c.citedBy).forEach(y=>{ if(!set.has(y)){set.add(y);next.push(y);} });
    });
    frontier=next;
  }
  return set;
}
const PRESETS={
  loadbearing:{ stratum:'all', q:'', parts:null, roles:'all', focus:topCitedIds() },
  cornerstones:{ stratum:'all', q:'', parts:null, roles:'all', focus:['F-1','F-4','D-1','R-9','R-12'] },
  capability:{ stratum:'MC', q:'', parts:null, roles:'all', focus:null },
  sovereign:{ stratum:'all', q:'', parts:null, roles:'Enforcer', focus:[...neighborhood('F-4',2)] },
};

function applyPreset(p){
  partF=null; $$('#partchips button').forEach(b=>b.classList.remove('active'));
  stratF=p.stratum; $$('#stratchips button').forEach(b=>b.classList.toggle('active',b.dataset.sf===p.stratum));
  roleF=p.roles; $$('#rolechips button').forEach(b=>b.classList.toggle('active',b.dataset.rf===p.roles));
  q=p.q; search.value='';
  render();
  if(p.focus) p.focus.forEach(id=>{ const n=$(`.node[data-id="${id}"]`,map); if(n) n.classList.add('pulse'); });
  if(p.focus&&p.focus.length) highlight(p.focus[0]);
  if(p.focus&&p.focus[0]) select(p.focus[0]);
}
$$('#presets button[data-preset]').forEach(b=>b.addEventListener('click',()=>{
  const id=b.dataset.preset;
  if(id==='clear'){ PRESETS.clear(); return; }
  applyPreset(PRESETS[id]);
  $$('#presets button').forEach(x=>x.classList.toggle('active',x===b));
}));
Object.assign(PRESETS,{clear(){ partF=null;stratF='all';roleF='all';q='';search.value='';
  $$('#partchips button,#stratchips button,#rolechips button').forEach(b=>b.classList.toggle('active',b.dataset.sf==='all'||b.dataset.rf==='all'));
  clearSel0(); render(); }});
function clearSel0(){ if(sel){ sel=null; $('#detail-body').hidden=true; $('#detail-empty').hidden=false; } }

/* ---------- table sort ---------- */
$$('#atlastable th.sortable').forEach(th=>th.addEventListener('click',()=>{
  const k=th.dataset.k;
  if(sortK!==k) sortDir=(k==='indeg')?-1:1; else sortDir=-sortDir;
  sortK=k;
  render();
}));

/* ---------- hash deep-link ---------- */
function fromHash(){
  const m=location.hash.match(/clause=([A-Z]{1,3}-\d+)/);
  if(m && ids.has(m[1])){ select(m[1]); return true; }
  const qm=location.hash.match(/q=([^&]+)/);
  if(qm){ q=decodeURIComponent(qm[1]); search.value=q; render(); }
  return false;
}
addEventListener('hashchange',()=>fromHash());

/* ---------- legend ---------- */
$('#maplegend').innerHTML=PARTS.map((p,i)=>`<span style="color:${partColor(i)}">●</span> ${esc(p.title.replace(/^Part [IVX]+: /,''))}`).join(' · ')
  +'<br>node size = cited-by count · gold ring = entrenched core';

/* ---------- boot ---------- */
render();
pulses();
if(!fromHash()) clearSel();
function pulses(){
  const st=document.createElementNS(SVGNS,'style');
  st.textContent=`.node .hit{pointer-events:all}
.node.pulse .dot{animation:atlas-pulse 1.6s ease-out 3}
@keyframes atlas-pulse{0%{stroke-width:6}100%{stroke-width:1.5}}
.node.sel .dot{stroke-width:3}
.node.dim{opacity:.16!important}`;
  map.appendChild(st);
}
})();
