import{N as c}from"./index-77843275.js";import{r as p}from"./request-b38f8512.js";import{x as m,Q as _,T as d,W as e,X as t,$ as r,a0 as n,P as f}from"./clientConfigs-8aa21dc4.js";const v={class:"demo-container"},x=m({__name:"raceCondition",setup(C){const u=()=>{s.value=null,o.value=!1,a.value=null},{result:s,loading:o,error:a,run:i}=c(p,{useLastRequest:!0});return(k,l)=>(_(),d("div",v,[e("h3",null,[t("result: "),e("span",null,r(n(s)),1)]),e("h3",null,[t("loading: "),e("span",null,r(n(o)),1)]),e("h3",null,[t("error: "),e("span",null,r(n(a)),1)]),e("button",{class:"primary",onClick:l[0]||(l[0]=()=>n(i)())},"run"),e("button",{onClick:u},"reset")]))}}),h=f(x,[["__file","raceCondition.vue"]]);export{h as default};
