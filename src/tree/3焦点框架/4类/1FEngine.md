## 使用方式
```
let default_options = {
 "ROUTER_CACHE": true, // 页面是否保存焦点以及缓存等状态
 "KEYS": {
 "left": [37], // 可配置遥控器或键盘对相应按键的code
 "top": [38],
 "bottom": [40],
 "right": [39],
 "ok": [83, 13]
 }
}
Let engine = new FEngine(default_options) // options可不传
```

## 开放Api
* [engine.freeze()](./engine-freeze.md)
* [engine.unfreeze()](./engine-unfreeze.md)
* [engine.findLeafByDom(el)](./findLeafByDom.md)
* [engine.findLeafByDom(el)](./findLeafByDom.md)
* [engine.findLeafById(id)](./findLeafById.md)
* [engine.findTrunkByDom(el)](./findTrunkByDom.md)
* [engine.findTrunkById(id)](./findTrunkById.md)
* [engine.findFocusedLeaf()](./findFocusedLeaf.md)
* [engine.forget()](./forget.md)
* [engine.$nextTick()](./nextTick.md)
* [engine.onFocus()](./onFocus.md)

## 开放属性
* engine.last_key_down
* engine.last_key_up
