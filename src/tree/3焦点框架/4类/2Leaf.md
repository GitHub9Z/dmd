## 使用案例
```
<div db-leaf></div>
```
## 使用场景
使得该dom元素可落焦
## 基本属性 
* db-leaf
## 可选属性
* db-focus(面向引擎) 
* db-cache(面向引擎)
*  db-freeze(面向用户) 
* db-default(面向用户)
* db-left(面向用户)
* db-right(面向用户)
* db-top(面向用户)
* db-bottom(面向用户)
* db-id(面向用户)
* db-block(面向用户)
* db-inline(面向用户)
## 实例开放属性
* leaf.engine // 所属引擎
* leaf.id // 唯一id
* leaf.el// 对应的dom对象
* leaf.parent// 所属的枝干对象
## 开放Api:
* [leaf.focus()](./focus.md) // 聚焦本叶子元素
* [leaf.freeze()](./freeze.md) // 冻结本叶子元素(不可落焦)
* [leaf.unfreeze()](./unfreeze.md) // 解冻本叶子元素
## 开放事件
* [ ] onfocus=该元素聚焦时触发
* [ ] onblur=该元素失焦时触发   
* [ ] onkeydown=该元素聚焦时按下键盘触发
* [ ] onkeyup=该元素聚焦时抬起  键盘触发
* [ ] onok=该元素聚焦时按下ok键触发
* [ ] ontop=该元素聚焦时按下上键触发
* [ ] onbottom=该元素聚焦时按下下键触发
* [ ] onleft=该元素聚焦时按下左键触发
* [ ] onright=该元素聚焦时按下右键触发