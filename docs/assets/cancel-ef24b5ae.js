import{N as k}from"./index-77843275.js";import{r as b}from"./request-b38f8512.js";import{x as m,B as p,Q as c,T as C,W as e,X as o,$ as a,a0 as l,P as f,a3 as x,a4 as B}from"./clientConfigs-8aa21dc4.js";const V={class:"demo-container"},y=m({__name:"cancelChild",setup(v){const n=p(""),s=()=>{n.value="onCancel triggered"},u=()=>{r.value=null,i.value=!1,_.value=null,n.value=""},{result:r,loading:i,error:_,run:h,cancel:d}=k(b,{onCancel:s});return(D,t)=>(c(),C("div",V,[e("h3",null,[o("result: "),e("span",null,a(l(r)),1)]),e("h3",null,[o("loading: "),e("span",null,a(l(i)),1)]),e("h3",null,[o("error: "),e("span",null,a(l(_)),1)]),e("h3",null,[o("onCancel: "),e("span",null,a(n.value),1)]),e("button",{class:"primary",onClick:t[0]||(t[0]=()=>l(h)())},"run"),e("button",{onClick:t[1]||(t[1]=(...g)=>l(d)&&l(d)(...g))},"cancel"),e("button",{onClick:u},"reset")]))}}),N=f(y,[["__file","cancelChild.vue"]]),$={class:"demo-container"},S=e("br",null,null,-1),T=e("br",null,null,-1),q=m({__name:"cancel",setup(v){const n=p(!0),s=()=>{n.value=!n.value};return(u,r)=>(c(),C("div",$,[e("button",{class:"primary",onClick:s},"toggleChild"),S,T,n.value?(c(),x(N,{key:0})):B("v-if",!0)]))}}),W=f(q,[["__file","cancel.vue"]]);export{W as default};