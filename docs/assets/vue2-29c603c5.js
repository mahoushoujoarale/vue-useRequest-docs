import{F as _}from"./index-e09ccffb.js";import{r as p}from"./request-d655d557.js";import{g as c,o as m,c as d,b as e,d as r,t as l,u as n,_ as f}from"./app-78262cf9.js";const v={class:"demo-container"},g=c({__name:"vue2",setup(k){const i=()=>{o.value=null,s.value=!1,u.value=null},{result:o,loading:s,error:u,run:a}=_(p);return(x,t)=>(m(),d("div",v,[e("h3",null,[r("result: "),e("span",null,l(n(o)),1)]),e("h3",null,[r("loading: "),e("span",null,l(n(s)),1)]),e("h3",null,[r("error: "),e("span",null,l(n(u)),1)]),e("button",{class:"primary",onClick:t[0]||(t[0]=()=>n(a)(!1))},"run"),e("button",{onClick:t[1]||(t[1]=()=>n(a)(!0))},"runError"),e("button",{onClick:i},"reset")]))}});const B=f(g,[["__file","vue2.vue"]]);export{B as default};
