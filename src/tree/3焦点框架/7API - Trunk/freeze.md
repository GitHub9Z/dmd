## 使用场景
* 需要批量指定多个leaf实例暂时不参与焦点事件（常用于弹窗）
## 使用方式
```
let trunk = engine.findLeafByDom(document.getElementById('db-trunk'))
trunk.freeze()
```