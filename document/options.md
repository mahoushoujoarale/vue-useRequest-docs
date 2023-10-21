# 配置
## 默认配置
`useRequest`默认开启了一些配置，使得它会具有以下行为：
- 发起请求时，取消尚未完成的请求
- 组件卸载时，取消该组件尚未完成的请求

你可以通过[全局配置](#全局配置)、[局部配置](#局部配置)覆盖它，具体配置项可参考 [Options](../api#options)。

## 全局配置
如果你想全局定义`useRequest`的行为，避免在使用时进行大量重复的配置，可以通过使用`setGlobalOptions`来达到这个目的。
```ts
// main.ts
import { setGlobalOptions } from '@superarale/vue-use-request';
// ...
setGlobalOptions({
  useLastRequest: true,
  // ...
});
```

## 局部配置
```ts
// app.vue
// ...
const { result } = useRequest(request, {
  useLastRequest: false, // 覆盖全局配置
});
// ...
```

## 类型
`useRequest`导出了全局配置项和局部配置项的Typescript类型`IGlobalOptions`和`IUseRequestOptions`：
```ts
import { IGlobalOptions, IUseRequestOptions, setGlobalOptions } from '@superarale/vue-use-request';
// ...
const globalOptions: IGlobalOptions = {
  cancelOnDispose: false,
};
setGlobalOptions(globalOptions);
// ...
const options: IUseRequestOptions<IResult> =  {
  useLastRequest: true,
};
const { result } = useRequest(request, options);
// ...
```

:::tip
配置权重：默认配置 < 全局配置 < 局部配置。
:::