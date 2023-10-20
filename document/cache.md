# 缓存
`useRequest`具有内置的缓存功能，可用于在指定时间内存储请求结果，以便在后续请求中重复使用。这对于减少不必要的重复网络请求非常有用。

## 设置缓存时间
通过 [cacheTime](/api/index.md#cachetime) 选项来设置缓存的有效时间，以毫秒为单位。
```ts
const { result, loading, error, run } = useRequest(request, {
  cacheTime: 3000,
});
```

## 监听缓存
通过传入 [onCache](/api/index.md#oncache) 函数，可以在命中缓存时触发回调。
```ts
const onCacheStr = ref('');

const onCache = () => {
  onCacheStr.value = 'onCache 被触发';
};

const { result, loading, error, run } = useRequest(request, {
  cacheTime: 3000,
  onCache,
});
```

## 完整示例
@[preview](@/.vuepress/vue-previews/cache.vue)
