import{x as f,a as d}from"./index-cce5e1cc.js";import{g as m,o as b,c as v,b as e,d as r,t as n,u as s,_ as x}from"./app-c39531cc.js";const y={class:"demo-container"},g="https://restapi.amap.com/v3/weather/weatherInfo?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000",k=m({__name:"basic",setup(w){const c=async(i,t)=>(t&&await new Promise((C,_)=>setTimeout(()=>{_(new Error("error"))},1e3)),(await d.get(g,{signal:i})).data),p=()=>{a.value=null,o.value=!1,l.value=null},{result:a,loading:o,error:l,run:u}=f(c);return(i,t)=>(b(),v("div",y,[e("h3",null,[r("result: "),e("span",null,n(s(a)),1)]),e("h3",null,[r("loading: "),e("span",null,n(s(o)),1)]),e("h3",null,[r("error: "),e("span",null,n(s(l)),1)]),e("button",{class:"primary",onClick:t[0]||(t[0]=()=>s(u)(!1))},"run"),e("button",{onClick:t[1]||(t[1]=()=>s(u)(!0))},"runError"),e("button",{onClick:p},"reset")]))}});const N=x(k,[["__file","basic.vue"]]);export{N as default};
