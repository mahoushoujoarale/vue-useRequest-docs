import{B as f,J as m,K as n,_ as a,x as l,L as h,g as E,v as u,a as v,M as O,N as y,O as L,c as _,R}from"./clientConfigs-8aa21dc4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const p=[],d=f(m),V={"14be0c23":n(()=>a(()=>import("./basic-8c40edf3.js"),["assets/basic-8c40edf3.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"59061d77":n(()=>a(()=>import("./cache-9a5d04b1.js"),["assets/cache-9a5d04b1.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),39345355:n(()=>a(()=>import("./cancel-ef24b5ae.js"),["assets/cancel-ef24b5ae.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"304418af":n(()=>a(()=>import("./fetch-1e3dc7a2.js"),["assets/fetch-1e3dc7a2.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js"])),"3942ae8a":n(()=>a(()=>import("./forceRun-7bd6452c.js"),["assets/forceRun-7bd6452c.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"5d6aaa42":n(()=>a(()=>import("./lifecycle-60b02968.js"),["assets/lifecycle-60b02968.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"18ef0b82":n(()=>a(()=>import("./raceCondition-cb31d2b8.js"),["assets/raceCondition-cb31d2b8.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"3e018d9d":n(()=>a(()=>import("./retry-db29ae84.js"),["assets/retry-db29ae84.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"])),"7bb68ff2":n(()=>a(()=>import("./vue2-abc9577b.js"),["assets/vue2-abc9577b.js","assets/index-77843275.js","assets/clientConfigs-8aa21dc4.js","assets/request-b38f8512.js"]))},A=l({name:"Vuepress",setup(){const s=h(),t=E(()=>V[s.params.name]);return()=>t.value?u(t.value):u("div","404 Not Found")}}),P=()=>v({history:O(y(d.value.base)),routes:[{path:"/:name",component:A}],scrollBehavior:(t,i,o)=>o||(t.hash?{el:t.hash}:{top:0})}),D=async()=>{var i;const s=L({name:"VuepressApp",setup(){var o;for(const e of p)(o=e.setup)==null||o.call(e);return()=>[u(R),..._.concat(p).flatMap(({rootComponents:e=[]})=>e.map(r=>u(r)))]}}),t=P();for(const o of _.concat(p))await((i=o.enhance)==null?void 0:i.call(o,{app:s,router:t,siteData:d}));return s.use(t),{app:s,router:t}};D().then(({app:s,router:t})=>{t.isReady().then(()=>{s.mount("#app")})});