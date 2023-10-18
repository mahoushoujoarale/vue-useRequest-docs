# FAQ
## 为什么取消网络请求没有生效？
首先，请确保你遵循了`useRequest`的使用规范，参考[基础用法](/document/basic.md)。

其次，请确保你传入的`signal`没有被覆盖掉。如果你使用的是axios，你的项目可能在axios拦截器中做了一些处理，覆盖掉了axios的signal属性，导致取消网络请求失败。
