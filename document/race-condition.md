# 竞态
`竞态`是指在上一次请求尚未完成的情况下再次发起请求，但是两次请求的状态是共用的，如果不做特殊处理，会导致状态混乱，如果后发出去的请求比先发出去的请求更早得到响应，就会导致数据混乱。

`useRequest`中有两种思路来处理竞态问题：
- 以当前请求的状态为准。如果当前请求之前有尚未完成的请求，则取消上一次请求。
- 以前一次请求的状态为准。如果当前请求之前有尚未完成的请求，则取消本次请求的发送。

`useRequest`默认采用的是第一种思路，这种情况下，`cancelLastRequest`需要被设置为`true`，同时 [useLastRequest](../api/#uselastrequest) 需要被设置为`false`。

第二种思路仅需将`useLastRequest`设置为`true`。

:::danger
请不要将`cancelLastRequest`设置为`false`的同时将`useLastRequest`也设置为`false`，这样`useRequest`将不能够正确处理竞态问题，除非你明确知道你在做什么，并自己处理好竞态问题。
:::

## 完整示例
<demo src="../components/raceCondition.vue"></demo>
