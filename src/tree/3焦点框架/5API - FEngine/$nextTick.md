## 使用场景
* 等待下一次重新渲染后执行（常用于焦点框架初始化前）
## 使用方式
```
// 若不使用$nextTick可能会导致获取leaf失败
mounted() {
    this.$engine.$nextTick(() => {
        this.$engine.findLeafByDom(el).focus()
    })
}
```