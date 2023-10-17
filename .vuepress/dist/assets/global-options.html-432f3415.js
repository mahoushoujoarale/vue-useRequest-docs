import{_ as s,o as a,c as e,a as t,b as n}from"./app-381e7028.js";const o={},p=t(`<h1 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置" aria-hidden="true">#</a> 全局配置</h1><p>如果你想全局定义<code>useRequest</code>的行为，避免在使用时进行大量重复的配置，可以通过使用<code>setGlobalOptions</code>来达到这个目的。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// main.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> setGlobalOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@superarale/vue-use-request&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token function">setGlobalOptions</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  useLastRequest<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// app.vue</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> result <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  useLastRequest<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 覆盖全局配置</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,"配置权重：defaultOptions < setGlobalOptions < 局部自定义options")],-1),l=[p,c];function i(u,r){return a(),e("div",null,l)}const k=s(o,[["render",i],["__file","global-options.html.vue"]]);export{k as default};
