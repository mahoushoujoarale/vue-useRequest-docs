# 生命周期
`useRequest`提供了部分生命周期方法来帮助你在请求发起前后、请求成功、请求失败、触发缓存、取消请求时进行一些操作。

## 监听请求前
通过传入 [onBefore](../api#onbefore) 函数，可以在请求发起前执行操作。
```ts
const onBefore = () => {
  onBeforeStr.value = 'onBefore triggered';
};

const { result, loading, error, run } = useRequest(request, {
  onBefore,
});
```

## 监听请求后
通过传入 [onAfter](../api#onafter) 函数，可以在请求完成后执行操作。
```ts
const onAfter = () => {
  onAfterStr.value = 'onAfter triggered';
};

const { result, loading, error, run } = useRequest(request, {
  onAfter,
});
```

## 监听请求成功
通过传入 [onSuccess](../api#onsuccess) 函数，可以在请求成功时执行操作。
```ts
const onSuccess = (result: IResult) => {
  onSuccessStr.value = `onSuccess triggered: ${JSON.stringify(result)}`;
};

const { result, loading, error, run } = useRequest(request, {
  onSuccess,
});
```

## 监听请求失败
通过传入 [onError](../api#onerror) 函数，可以在请求失败时执行操作。
```ts
const onError = (error: Error) => {
  onErrorStr.value = `onError triggered: ${error}`;
};

const { result, loading, error, run } = useRequest(request, {
  onError,
});
```

## 监听缓存
参考[监听缓存](./cache#监听缓存)。

## 监听取消请求
参考[监听取消请求](./cancel#监听取消请求)。

## 完整示例
<demo src="../components/lifecycle.vue"></demo>
