import{c as v,s as i,a as S,r as A,S as C,b as u,p as R,C as H,d as P,e as y,f as T,g as d,l as $,h as E,i as D,j as O,k as x,m as q,n as w,o as V,q as j,w as F,t as M,u as _,v as f,R as B,x as I,y as N,z as G,A as W,B as k,D as z,E as J,F as Q,G as U,H as p,I as Z}from"./clientConfigs-8aa21dc4.js";const K=[["v-01560935","/timeline/",{title:""},[]],["v-e1e3da16","/posts/",{title:""},[]],["v-53355ebb","/friendship-link/",{title:""},[]],["v-8daa1a0e","/",{title:""},["/README.md"]],["v-372ea4e3","/aboutme/",{title:"💫 About Me:"},["/aboutme/index.md"]],["v-744497ce","/api/",{title:"API参考"},["/api/index.md"]],["v-5ecefb46","/document/basic.html",{title:"基础用法"},[":md"]],["v-b8edd71c","/document/cache.html",{title:"缓存"},[":md"]],["v-e88bafb8","/document/cancel.html",{title:"取消请求"},[":md"]],["v-97eaff8c","/document/fetch.html",{title:"Fetch"},[":md"]],["v-7e779baa","/document/force-run.html",{title:"强制请求"},[":md"]],["v-b494b590","/document/guide.html",{title:"指南"},[":md"]],["v-5c73280a","/document/lifecycle.html",{title:"生命周期"},[":md"]],["v-1fb84416","/document/options.html",{title:"配置"},[":md"]],["v-3cbb899c","/document/quick-start.html",{title:"快速开始"},[":md"]],["v-0677d79f","/document/race-condition.html",{title:"竞态"},[":md"]],["v-5dfba90c","/document/retry.html",{title:"错误重试"},[":md"]],["v-cbf1589c","/document/vue2.html",{title:"Vue2"},[":md"]],["v-5ad9c004","/donation/",{title:"Buy Me A Coffee"},["/donation/index.md"]],["v-7446a652","/faq/",{title:"FAQ"},["/faq/index.md"]],["v-3706649a","/404.html",{title:""},[]]];var L=I({name:"Vuepress",setup(){const e=N();return()=>f(e.value)}}),X=()=>K.reduce((e,[a,t,o,n])=>(e.push({name:a,path:t,component:L,meta:o},{path:t.endsWith("/")?t+"index.html":t.substring(0,t.length-5),redirect:t},...n.map(r=>({path:r===":md"?t.substring(0,t.length-5)+".md":r,redirect:t}))),e),[{name:"404",path:"/:catchAll(.*)",component:L}]),Y=_,ee=()=>{const e=S({history:Y(A("/vue-useRequest-docs/")),routes:X(),scrollBehavior:(a,t,o)=>o||(a.hash?{el:a.hash}:{top:0})});return e.beforeResolve(async(a,t)=>{var o;(a.path!==t.path||t===C)&&([a.meta._data]=await Promise.all([u.resolvePageData(a.name),(o=R[a.name])==null?void 0:o.__asyncLoader()]))}),e},te=e=>{e.component("ClientOnly",H),e.component("Content",P)},ae=(e,a,t)=>{const o=y(()=>a.currentRoute.value.path),n=y(()=>u.resolveRouteLocale(i.value.locales,o.value)),r=T(o,()=>a.currentRoute.value.meta._data),s=d(()=>u.resolveLayouts(t)),l=d(()=>u.resolveSiteLocaleData(i.value,n.value)),c=d(()=>u.resolvePageFrontmatter(r.value)),m=d(()=>u.resolvePageHeadTitle(r.value,l.value)),g=d(()=>u.resolvePageHead(m.value,c.value,l.value)),h=d(()=>u.resolvePageLang(r.value,l.value)),b=d(()=>u.resolvePageLayout(r.value,s.value));return e.provide($,s),e.provide(E,r),e.provide(D,c),e.provide(O,m),e.provide(x,g),e.provide(q,h),e.provide(w,b),e.provide(V,n),e.provide(j,l),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>c.value},$head:{get:()=>g.value},$headTitle:{get:()=>m.value},$lang:{get:()=>h.value},$page:{get:()=>r.value},$routeLocale:{get:()=>n.value},$site:{get:()=>i.value},$siteLocale:{get:()=>l.value},$withBase:{get:()=>F}}),{layouts:s,pageData:r,pageFrontmatter:c,pageHead:g,pageHeadTitle:m,pageLang:h,pageLayout:b,routeLocale:n,siteData:i,siteLocaleData:l}},oe=()=>{const e=G(),a=W(),t=k([]),o=()=>{e.value.forEach(r=>{const s=re(r);s&&t.value.push(s)})},n=()=>{document.documentElement.lang=a.value,t.value.forEach(r=>{r.parentNode===document.head&&document.head.removeChild(r)}),t.value.splice(0,t.value.length),e.value.forEach(r=>{const s=ne(r);s!==null&&(document.head.appendChild(s),t.value.push(s))})};z(J,n),Q(()=>{o(),n(),U(()=>e.value,n)})},re=([e,a,t=""])=>{const o=Object.entries(a).map(([l,c])=>p(c)?`[${l}=${JSON.stringify(c)}]`:c===!0?`[${l}]`:"").join(""),n=`head > ${e}${o}`;return Array.from(document.querySelectorAll(n)).find(l=>l.innerText===t)||null},ne=([e,a,t])=>{if(!p(e))return null;const o=document.createElement(e);return Z(a)&&Object.entries(a).forEach(([n,r])=>{p(r)?o.setAttribute(n,r):r===!0&&o.setAttribute(n,"")}),p(t)&&o.appendChild(document.createTextNode(t)),o},se=M,le=async()=>{var t;const e=se({name:"VuepressApp",setup(){var o;oe();for(const n of v)(o=n.setup)==null||o.call(n);return()=>[f(B),...v.flatMap(({rootComponents:n=[]})=>n.map(r=>f(r)))]}}),a=ee();te(e),ae(e,a,v);for(const o of v)await((t=o.enhance)==null?void 0:t.call(o,{app:e,router:a,siteData:i}));return e.use(a),{app:e,router:a}};le().then(({app:e,router:a})=>{a.isReady().then(()=>{e.mount("#app")})});export{le as createVueApp};
