# 错误重试
:::tip
为保证体验，请打开开发者工具，选择网络面板，观察网络请求状态。如果请求响应时间过短，可以调到低速3G模式延长响应时间。
:::

## 设置重试次数
通过 [retryTimes](../api#retrytimes) 选项控制请求在发生错误时应重试的最大次数。
```ts
const { result, loading, error, run } = useRequest(request, {
  retryTimes: 3,
});
```

:::warning
`onError`仅会在错误重试次数用尽后触发，`error`状态同理。
:::

## 完整示例
<demo src="../components/retry.vue"></demo>
