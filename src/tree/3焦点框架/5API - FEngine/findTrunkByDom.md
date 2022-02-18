## 使用场景
* 需要单独对trunk实例进行freeze等操作
## 使用方式
```
let trunk = engine.findLeafByDom(document.getElementById('db-trunk'))
trunk.freeze()
```