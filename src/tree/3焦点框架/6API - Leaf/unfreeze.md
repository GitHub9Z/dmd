## 使用场景
* 需要指定leaf实例重新参与焦点事件
## 使用方式
```
let leaf = engine.findLeafByDom(document.getElementById('db-leaf'))
leaf.unfreeze()
```