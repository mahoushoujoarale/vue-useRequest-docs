import{P as c,V as o,Q as s,T as d,W as a,X as e,Y as n,Z as r,U as i}from"./clientConfigs-8aa21dc4.js";const h={},l=a("h1",{id:"faq",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),e(" FAQ")],-1),_=a("h2",{id:"为什么取消网络请求没有生效",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#为什么取消网络请求没有生效","aria-hidden":"true"},"#"),e(" 为什么取消网络请求没有生效？")],-1),u=a("code",null,"useRequest",-1),p=i('<p>其次，请确保你传入的<code>signal</code>没有被覆盖掉。如果你使用的是axios，你的项目可能在axios拦截器中做了一些处理，覆盖掉了axios的signal属性，导致取消网络请求失败。</p><h2 id="为什么没有提供防抖和节流的配置" tabindex="-1"><a class="header-anchor" href="#为什么没有提供防抖和节流的配置" aria-hidden="true">#</a> 为什么没有提供防抖和节流的配置？</h2><p>私以为防抖和节流操作不应该等到发起网络请求时才做，应该在上游完成。</p><h2 id="为什么不适用cachekey来区分缓存" tabindex="-1"><a class="header-anchor" href="#为什么不适用cachekey来区分缓存" aria-hidden="true">#</a> 为什么不适用cacheKey来区分缓存？</h2><p>首先，使用cacheKey是一项心智负担很重的操作，个人不喜欢。</p><p>其次，<code>useRequest</code>的设计思路是就是接收同一个请求，返回的结果都是针对这一个请求服务的，如果是不同的请求，你应该考虑使用多个<code>useRequest</code>。</p>',6);function f(x,m){const t=o("RouterLink");return s(),d("div",null,[l,_,a("p",null,[e("首先，请确保你遵循了"),u,e("的使用规范，参考"),n(t,{to:"/document/basic.html"},{default:r(()=>[e("基础用法")]),_:1}),e("。")]),p])}const b=c(h,[["render",f],["__file","index.html.vue"]]);export{b as default};
