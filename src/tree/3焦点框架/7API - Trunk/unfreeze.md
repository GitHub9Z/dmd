## 使用场景
* 需要批量指定多个leaf实例重新参与焦点事件
## 使用方式
```
let trunk = engine.findLeafByDom(document.getElementById('db-trunk'))
trunk.unfreeze()
```