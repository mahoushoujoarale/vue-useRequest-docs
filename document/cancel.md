# 取消请求
:::tip
为保证体验，这一节请打开开发者工具，选择网络面板，观察网络请求状态。如果请求响应时间过短，可以调到低速3G模式延长响应时间。
:::

## 取消尚未完成的请求
通过 [cancelLastRequest](/api/index.md#cancellastrequest) 选项控制是否取消尚未完成的请求。
```ts
const { result, loading, error, run } = useRequest(request, {
  cancelLastRequest: false,
});
```

## 组件卸载时取消当前组件尚未完成的请求
通过 [cancelOnDispose](/api/index.md#cancelondispose) 选项控制是否在组件卸载时取消当前组件尚未完成的请求。
```ts
const { result, loading, error, run } = useRequest(request, {
  cancelOnDispose: false,
});
```

## 手动取消请求
通过`useRequest`返回的 [cancel](/api/index.md#cancel) 函数手动取消请求。
```ts
const { result, loading, error, run, cancel } = useRequest(request);
```

## 监听取消请求
通过传入 [onCancel](/api/index.md#oncancel) 函数，可以在`cancel`方法被调用时触发回调。
```ts
const onCancelStr = ref('');

const onCancel = () => {
  onCancelStr.value = 'onCancel triggered';
};

const { result, loading, error, run } = useRequest(request, {
  onCancel,
});
```

:::warning
被取消的请求将不会触发`onAfter`和`onError`。
:::

## 完整示例
@[preview](@/.vuepress/vue-previews/cancel.vue)
