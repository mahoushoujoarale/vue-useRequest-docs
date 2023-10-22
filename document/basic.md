# 基础用法
## 引入useRequest
```ts
import { useRequest } from '@superarale/vue-use-request';
```

## 创建请求函数
[request](../api#request) 函数需要设置第一个参数`AbortSignal`，并传递给`axios`或`fetch`。
```ts
const url = 'https://restapi.amap.com/v3/ip';
const request = async (signal, params: IParams) => {
  const res = await axios.get<IResult>(url, {
    signal,
    params,
  });
  return res.data;
};
```

## 使用useRequest
将`request`作为参数传递给 [useRequest](../api)。
```ts
const { result, loading, error, run } = useRequest(request);
```

## 发起请求
调用返回的 [run](../api#run) 函数，传入对应参数发起请求。
```ts
const paras: IParams = {
  key: correctKey,
};
run(params);
```

## 访问请求状态
你可以通过返回的变量来访问请求状态：
- [result](../api#result)：包含请求的结果（如果发生错误则为null）。
- [loading](../api#loading)：一个布尔值，指示是否当前有请求正在进行。
- [error](../api#error)：包含请求期间发生的任何错误（如果没有错误则为 null）。

:::tip
查看更多useRequest的[返回值](../api#return-values)。
:::

## 完整示例
<demo src="../components/basic.vue"></demo>
