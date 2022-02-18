## 使用案例
~~~
<div
 db-long-scroll
 db-data="grid-list"
 ontouchBottom="handleTouchBottom"
>
    <div db-leaf>[item.title]</div>
    <img db-leaf src="[item.img]"></div>
</div>

~~~
## 使用场景
*   内部leaf过多且存在分页加载
*   内部leaf的dom较为复杂影响性能
## 基本属性
*   db-long-scroll
*   db-data=“key” // 配合engine\[key\].data = \[\]来进行列表初始化赋值
## 可选属性
继承Trunk的所有可选属性
db-style
db-class
db-if
## 实例开放属性
继承Trunk的所有开放属性
## 开放Api
继承Trunk的所有开放Api
## 开放事件
* [ ] ontouchBottom=“列表触底事件(分页异步请求)”
