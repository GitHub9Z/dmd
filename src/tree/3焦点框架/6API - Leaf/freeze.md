## 使用场景
* 需要指定leaf实例暂时不参与焦点事件（常用于禁用按钮）
## 使用方式
```
let leaf = engine.findLeafByDom(document.getElementById('db-leaf'))
leaf.freeze()
```