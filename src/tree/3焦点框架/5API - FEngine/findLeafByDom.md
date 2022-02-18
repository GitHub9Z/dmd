## 使用场景
* 需要单独对leaf实例进行focus/freeze等操作
## 使用方式
```
let leaf = engine.findLeafByDom(document.getElementById('db-leaf'))
leaf.focus()
```