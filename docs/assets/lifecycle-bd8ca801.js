import{x,a as k}from"./index-cce5e1cc.js";import{g as w,i as o,o as B,c as E,b as e,d as r,t as n,u as t,_ as C}from"./app-c39531cc.js";const A={class:"demo-container"},N="https://restapi.amap.com/v3/weather/weatherInfo?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000",T=w({__name:"lifecycle",setup(V){const _=async(d,l)=>(l&&await new Promise((D,b)=>setTimeout(()=>{b(new Error("error"))},1e3)),(await k.get(N,{signal:d})).data),g=()=>{i.value=null,f.value=!1,p.value=null,s.value="",a.value="",u.value="",c.value=""},s=o(""),a=o(""),u=o(""),c=o(""),m=()=>{s.value="onBefore triggered"},y=()=>{a.value="onAfter triggered"},h=()=>{u.value="onSuccess triggered"},S=()=>{c.value="onError triggered"},{result:i,loading:f,error:p,run:v}=x(_,{onBefore:m,onAfter:y,onSuccess:h,onError:S});return(d,l)=>(B(),E("div",A,[e("h3",null,[r("result: "),e("span",null,n(t(i)),1)]),e("h3",null,[r("loading: "),e("span",null,n(t(f)),1)]),e("h3",null,[r("error: "),e("span",null,n(t(p)),1)]),e("h3",null,[r("onBefore: "),e("span",null,n(s.value),1)]),e("h3",null,[r("onAfter: "),e("span",null,n(a.value),1)]),e("h3",null,[r("onSuccess: "),e("span",null,n(u.value),1)]),e("h3",null,[r("onError: "),e("span",null,n(c.value),1)]),e("button",{class:"primary",onClick:l[0]||(l[0]=()=>t(v)(!1))},"run"),e("button",{onClick:l[1]||(l[1]=()=>t(v)(!0))},"runError"),e("button",{onClick:g},"reset")]))}});const j=C(T,[["__file","lifecycle.vue"]]);export{j as default};
