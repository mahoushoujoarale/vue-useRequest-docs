import{I as h}from"./index-09158221.js";import{r as _,c as d}from"./request-2552ca82.js";import{x as f,B as v,Q as C,T as g,V as e,W as a,$ as n,a0 as l,P as k}from"./clientConfigs-c1cdcbdf.js";const x={class:"demo-container"},y=f({__name:"cache",setup(V){const s=v(""),u=r=>{s.value=`onCache triggered: ${JSON.stringify(r)}`},i=()=>{o.value=null,t.value=!1,c.value=null,s.value=""},{result:o,loading:t,error:c,run:p}=h(_,{cacheTime:3e3,onCache:u}),m=()=>{p({key:d})};return(r,B)=>(C(),g("div",x,[e("h3",null,[a("result: "),e("span",null,n(l(o)),1)]),e("h3",null,[a("loading: "),e("span",null,n(l(t)),1)]),e("h3",null,[a("error: "),e("span",null,n(l(c)),1)]),e("h3",null,[a("onCache: "),e("span",null,n(s.value),1)]),e("button",{class:"primary",onClick:m},"run"),e("button",{onClick:i},"reset")]))}}),b=k(y,[["__file","cache.vue"]]);export{b as default};
