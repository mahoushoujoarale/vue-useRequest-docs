# 缓存
`useRequest`具有内置的缓存功能，可用于在指定时间内存储请求结果，以便在后续请求中重复使用。这对于减少不必要的重复网络请求非常有用。

## 设置缓存时间
通过 [cacheTime](../api#cachetime) 选项来设置缓存的有效时间，以毫秒为单位。
```ts
const { result, loading, error, run } = useRequest(request, {
  cacheTime: 3000,
});
```

## 监听缓存
通过传入 [onCache](../api#oncache) 函数，可以在命中缓存时触发回调。
```ts
const onCacheStr = ref('');

const onCache = (result: IResult) => {
  onCacheStr.value = `onCache triggered: ${JSON.stringify(result)}`;
};

const { result, loading, error, run } = useRequest(request, {
  cacheTime: 3000,
  onCache,
});
```

## 完整示例
<demo src="../components/cache.vue"></demo>
