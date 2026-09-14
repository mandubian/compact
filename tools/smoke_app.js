#!/usr/bin/env node
// Runtime smoke test: executes site/app.js against a stubbed DOM to catch
// scope/ReferenceErrors that syntax checks miss. Run: node tools/smoke_app.js
// Minimal DOM stub — executes app.js to catch scope/ReferenceErrors at load.
const fs = require('fs'), vm = require('vm');
function stubEl(tag='div'){
  return { tag, style:{}, dataset:{}, innerHTML:'', textContent:'', value:'', checked:true,
    scrollTop:0, scrollHeight:100, classList:{add(){},remove(){},toggle(){},contains(){return false}},
    setAttribute(){}, getAttribute(){return null}, appendChild(){}, addEventListener(){}, focus(){},
    scrollIntoView(){}, getAttribute__(){}, querySelector(){return stubEl()}, querySelectorAll(){return []} };
}
const document = {
  querySelector(){ return stubEl(); },
  querySelectorAll(){ return [stubEl(),stubEl(),stubEl()]; },
  createElement(t){ return stubEl(t); },
  createElementNS(ns,t){ return stubEl(t); },
  body: stubEl('body'),
  documentElement: {scrollTop:0, scrollHeight:100},
  activeElement: {tagName:'BODY'},
};
globalThis.window = globalThis;
globalThis.window.document = document;
globalThis.window.addEventListener = ()=>{};
globalThis.window.matchMedia = ()=>({matches:true}); // reduced-motion → instant paths
globalThis.window.IntersectionObserver = class { observe(){} unobserve(){} disconnect(){} };
// simpler: strip the header comment and eval clauses.js in-context
try { vm.runInThisContext(fs.readFileSync(__dirname + '/../site/clauses.js','utf8')); } catch(e){ console.log('clauses.js exec error:', e.message); process.exit(1); }
try {
  vm.runInThisContext(fs.readFileSync(__dirname + '/../site/app.js','utf8'));
  console.log('SMOKE OK — app.js executed to completion, no ReferenceErrors');
} catch(e){
  console.log('SMOKE FAIL:', e.constructor.name + ':', e.message);
  if (e.stack) console.log(e.stack.split('\n').slice(0,3).join('\n'));
  process.exit(1);
}
