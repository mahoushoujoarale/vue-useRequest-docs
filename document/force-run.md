# 强制请求
某些情况下你可能需要强制发出请求，[forceRun](../api/#forcerun) 就是为此而生的。
:::warning
`forceRun`会强制发出一次请求，取消尚未完成的请求，忽略缓存，忽略`useLastRequest`的设置。
:::

## 完整示例
<demo src="../components/forceRun.vue"></demo>
