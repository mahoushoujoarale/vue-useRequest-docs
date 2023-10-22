# 强制请求
:::tip
为保证体验，请打开开发者工具，选择网络面板，观察网络请求状态。如果请求响应时间过短，可以调到低速3G模式延长响应时间。
:::

某些情况下你可能需要强制发出请求，[forceRun](../api#forcerun) 就是为此而生的。

:::warning
`forceRun`会强制发出一次请求，取消尚未完成的请求，忽略缓存，忽略`useLastRequest`的设置。
:::

## 完整示例
<demo src="../components/forceRun.vue"></demo>
