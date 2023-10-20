# 基础用法
## 引入useRequest
```ts
import { useRequest } from '@superarale/vue-use-request';
```

## 创建请求函数
[request](/api/index.md#request) 函数需要设置第一个参数`AbortSignal`，并传递给`axios`或`fetch`。
```ts
const url = 'https://restapi.amap.com/v3/ip?key=e641661b0dfbf7ffa23a2110d44f38de&city=110000';
const request = async (signal) => {
  const res = await axios.get<string>(url, {
    signal,
  });
  return res.data;
};
```

## 使用useRequest
将`request`作为参数传递给 [useRequest](/api/index.md)。
```ts
const { result, loading, error, run } = useRequest(request);
```

## 发起请求
调用返回的 [run](/api/index.md#run) 函数，传入对应参数发起请求。
```ts
run();
```

## 访问请求状态
你可以通过返回的变量来访问请求状态：
- [result](/api/index.md#result)：包含请求的结果（如果发生错误则为null）。
- [loading](/api/index.md#loading)：一个布尔值，指示是否当前有请求正在进行。
- [error](/api/index.md#error)：包含请求期间发生的任何错误（如果没有错误则为 null）。
:::tip
查看更多useRequest的[返回值](/api/index.md#return-values)。
:::

## 完整示例
@[preview](@/.vuepress/vue-previews/basic.vue)
