import{N as J}from"./index-77843275.js";import{r as O}from"./request-b38f8512.js";import{x as h,B as u,Q as d,T as S,W as e,X as n,$ as l,a0 as r,P as b,a3 as R,a4 as q}from"./clientConfigs-8aa21dc4.js";const D={class:"demo-container"},P=h({__name:"vue2Child",setup(k){const t=u(""),a=u(""),c=u(""),i=u(""),v=u(""),f=u(""),B=()=>{t.value="onCancel triggered"},y=s=>{a.value=`onCache triggered: ${JSON.stringify(s)}`},x=()=>{c.value="onBefore triggered"},E=()=>{i.value="onAfter triggered"},N=s=>{v.value=`onSuccess triggered: ${JSON.stringify(s)}`,console.log(s)},V=s=>{f.value=`onError triggered: ${s}`},$=()=>{p.value=null,g.value=!1,m.value=null,t.value="",a.value="",c.value="",i.value="",v.value="",f.value=""},{result:p,loading:g,error:m,run:C,forceRun:A,cancel:_}=J(O,{retryTimes:3,cacheTime:3e3,onCancel:B,onCache:y,onBefore:x,onAfter:E,onSuccess:N,onError:V});return(s,o)=>(d(),S("div",D,[e("h3",null,[n("result: "),e("span",null,l(r(p)),1)]),e("h3",null,[n("loading: "),e("span",null,l(r(g)),1)]),e("h3",null,[n("error: "),e("span",null,l(r(m)),1)]),e("h3",null,[n("onCancel: "),e("span",null,l(t.value),1)]),e("h3",null,[n("onCache: "),e("span",null,l(a.value),1)]),e("h3",null,[n("onBefore: "),e("span",null,l(c.value),1)]),e("h3",null,[n("onAfter: "),e("span",null,l(i.value),1)]),e("h3",null,[n("onSuccess: "),e("span",null,l(v.value),1)]),e("h3",null,[n("onError: "),e("span",null,l(f.value),1)]),e("button",{class:"primary",onClick:o[0]||(o[0]=()=>r(C)())},"run"),e("button",{onClick:o[1]||(o[1]=()=>r(A)())},"forceRun"),e("button",{onClick:o[2]||(o[2]=(...T)=>r(_)&&r(_)(...T))},"cancel"),e("button",{onClick:o[3]||(o[3]=()=>r(C)(!0))},"runError"),e("button",{onClick:$},"reset")]))}}),Q=b(P,[["__file","vue2Child.vue"]]),W={class:"demo-container"},X=e("br",null,null,-1),j=e("br",null,null,-1),w=h({__name:"vue2",setup(k){const t=u(!0),a=()=>{t.value=!t.value};return(c,i)=>(d(),S("div",W,[e("button",{class:"primary",onClick:a},"toggleChild"),X,j,t.value?(d(),R(Q,{key:0})):q("v-if",!0)]))}}),H=b(w,[["__file","vue2.vue"]]);export{H as default};
