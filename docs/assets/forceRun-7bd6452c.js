import{N as d}from"./index-77843275.js";import{r as _}from"./request-b38f8512.js";import{x as v,B as C,Q as h,T as g,W as e,X as r,$ as t,a0 as n,P as k}from"./clientConfigs-8aa21dc4.js";const x={class:"demo-container"},R=v({__name:"forceRun",setup(B){const s=C(""),i=c=>{s.value=`onCache triggered: ${JSON.stringify(c)}`},f=()=>{a.value=null,l.value=!1,u.value=null,s.value=""},{result:a,loading:l,error:u,run:p,forceRun:m}=d(_,{cacheTime:3e3,onCache:i,useLastRequest:!0});return(c,o)=>(h(),g("div",x,[e("h3",null,[r("result: "),e("span",null,t(n(a)),1)]),e("h3",null,[r("loading: "),e("span",null,t(n(l)),1)]),e("h3",null,[r("error: "),e("span",null,t(n(u)),1)]),e("h3",null,[r("onCache: "),e("span",null,t(s.value),1)]),e("button",{class:"primary",onClick:o[0]||(o[0]=()=>n(p)())},"run"),e("button",{onClick:o[1]||(o[1]=()=>n(m)())},"forceRun"),e("button",{onClick:f},"reset")]))}}),y=k(R,[["__file","forceRun.vue"]]);export{y as default};