## 使用场景
* 需要单独对leaf实例进行focus/freeze等操作
* 且dom暂不存在的特殊前提下（推荐使用[findLeafByDom](./findLeafByDom.md)）
## 使用方式
```
// id 推算方式类似于xPath 根据dom的index由外到内（不取最后一层转而使用innerText）
let leaf = engine.findLeafById('0-1-2-3-innerText')
leaf.focus()
```