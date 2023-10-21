# 错误重试

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
