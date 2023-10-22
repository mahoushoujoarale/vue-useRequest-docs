import{a1 as f,a2 as D}from"./clientConfigs-a5b6559c.js";const E={},R=()=>E,L=Object.freeze({cancelLastRequest:!0,cancelOnDispose:!0,useLastRequest:!1,cacheTime:0,retryTimes:0}),x=(p,q)=>{const e={...L,...R(),...q},v=f(null),m=f(!1),b=f(null),c={result:v,loading:m,error:b};let u=new AbortController,t=!1,d=0,w=null,s=0;const y=(r,l=!1)=>{var n,o;c.result.value=r,c.error.value=null,a(!1),l||(d=Date.now(),w=r),(n=e.onSuccess)==null||n.call(e,r),(o=e.onAfter)==null||o.call(e)},T=r=>{var l,n;c.result.value=null,c.error.value=r,a(!1),(l=e.onError)==null||l.call(e,r),(n=e.onAfter)==null||n.call(e)},a=r=>{c.loading.value=r,t=r},g=async(...r)=>{const l=u;for(;s<=e.retryTimes;){try{const n=await p(l.signal,...r);return l.signal.aborted?new Error("canceled"):(y(n),n)}catch(n){if(l.signal.aborted)return new Error("canceled");if(s===e.retryTimes)return T(n),n}s++}return new Error("unexpected error")},h=async(...r)=>{var l,n;if(e.useLastRequest&&t)return new Error("waiting for last request");if((l=e.onBefore)==null||l.call(e),s=0,w&&Date.now()-d<e.cacheTime){a(!0);const o=await new Promise(C=>setTimeout(()=>{C(w)},20));return(n=e.onCache)==null||n.call(e,o),y(o,!0),o}return e.cancelLastRequest&&t&&i(),u=new AbortController,a(!0),await g(...r)},A=async(...r)=>{var l;return(l=e.onBefore)==null||l.call(e),s=0,t&&i(),u=new AbortController,a(!0),await g(...r)},i=()=>{var r;return t?((r=e.onCancel)==null||r.call(e),a(!1),u.abort("cancel request"),!0):!1};return D(()=>{e.cancelOnDispose&&t&&i()}),{result:v,loading:m,error:b,run:h,forceRun:A,cancel:i}},S=x;export{S as I};
