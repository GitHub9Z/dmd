## 使用案例
```
<div db-trunk db-cacheable>
    <div db-leaf></div>
    <div db-leaf db-cache></div>
    <div db-leaf></div>
</div>
```
## 使用场景
* 使内部leaf可缓存
* 使内部leaf可集体freeze
## 基本属性
* db-trunk
## 可选属性
* db-child-focus(面向引擎) 
* db-cacheable(面向用户) 
* db-freeze(面向用户)
* db-id(面向用户)
* db-top-forbid （设置该属性关闭顶部出口）
* db-bottom-forbid （设置该属性关闭底部出口）
* db-left-forbid （设置该属性关闭左侧出口）
* db-right-forbid （设置该属性关闭右侧出口）
## 实例开放属性
* trunk.engine // 所属引擎
* trunk.id // 唯一id
* trunk.child// 包含的所有叶子元素
* trunk.el// 对应的dom对象
## 开放Api
* [trunk.freeze()](./trunk-freeze.md) // 冻结包含的所有子叶子元素(不可落焦)
* [trunk.unfreeze()](./trunk-unfreeze.md) // 解冻包含的所有子叶子元素
## 开放事件
* [ ] onfocus=“焦点进入trunk”
* [ ] onblur=“焦点离开trunk”
* [ ] onchange=子元素焦点变动
* [ ] onok=子元素点击ok
* [ ] ontouchBottom=“焦点触底事件”
* [ ] ontouchTop=“焦点触顶事件”
* [ ] ontouchLeft=“焦点触左事件”
* [ ] ontouchRight=“焦点触右事件”
