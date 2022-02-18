## 使用场景
* 需要指定leaf实例聚焦（常用于页面初始化焦点）
* 此方法跳过当前所属trunk的缓存判断 （精准落焦）
## 使用方式
```
let leaf = engine.findLeafByDom(document.getElementById('db-leaf'))
leaf.forceFocus()
```