# API参考
useRequest通常由[Return Values](#return-values)、[Service](#service)、[Options](#options)三部分组成：
```ts
const { ...ReturnValues } = useRequest<P, R>(Service, Options);
```
:::tip
P、R分别是[Service](#service)自身参数和返回数据的泛型。
:::

## Return Values
### result
- 类型：`shallowRef<R | null>`
- 默认值 `null`

请求返回的数据。

### loading
- 类型：`shallowRef<boolean>`
- 默认值 `false`

[Service](#service)请求的执行状态。

### error
- 类型：`shallowRef<Error | null>`
- 默认值 `null`

如果请求过程中发生错误，会被`error`接收并返回。
:::tip
如果请求被取消，将不会修改error的值。
:::

### run
- 类型：`(...params: P) = > shallowRef<R | Error>`

触发[Service](#service)请求，返回请求的结果。

### forceRun
- 类型：`(...params: P) = > shallowRef<R | Error>`

强制触发[Service](#service)请求，忽略缓存和已在进行中请求，返回请求的结果。

### cancel
- 类型：`() => void`

手动取消进行中的请求，如果正确配置了[Service](#service)的第一个[AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)类型的参数，那么能够真正取消网络请求，可参考[取消请求](/document/cancel.md)。

## Service
- 类型：`(signal: AbortSignal, ...params: P) => Promise<R>`

网络请求，传递给`useRequest`的第一个参数，可参考[基础用法](/document/basic.md)。

## Options
### cancelLastRequest
- 类型：`boolean`
- 默认值 `true`

是否取消上次尚未完成的请求。
:::tip
当[useLastRequest](#uselastrequest)为true时，将忽略该项设置。
:::

### cancelOnDispose
- 类型：`boolean`
- 默认值 `true`

是否在组件销毁时取消尚未完成的请求。

### useLastRequest
- 类型：`boolean`
- 默认值 `false`

设置为true时，如果有尚未完成的请求，等待其响应，取消本次请求的发送。
:::tip
当该项置为true，并且发起请求时仍有尚未完成的请求，那么该次请求不会触发onBefore、onAfter、onSuccess、onError。
:::

### cacheTime
- 类型：`number`
- 默认值 `0`

在cacheTime有效期内发起的[run](#run)请求，如果已有缓存数据，将直接返回缓存结果。单位为毫秒，可参考[缓存](/document/cache.md)。

### onSuccess
- 类型：`<T>(result: T) => void;`
- 默认值 `false`

请求成功时触发。

### onCache
- 类型：`<T>(result: T) => void;`
- 默认值 `false`

从缓存中获取数据时触发。

### onError
- 类型：`(error: Error) => void;`
- 默认值 `false`

请求错误时触发。
:::tip
被取消的请求不会触发onError。
:::

### onBefore
- 类型：`() => void`
- 默认值 `false`

请求开始前触发。

### onAfter
- 类型：`() => void`
- 默认值 `false`

请求完成后触发。
:::tip
被取消的请求不会触发onAfter。
:::

### onCancel
- 类型：`() => void`
- 默认值 `false`

请求被取消时触发。
