## 使用场景
* 统一处理焦点事件（焦点音效/统计埋点等）
## 使用方式
```
let audio = new Howl({
    preload:  true,
    loop:  false,
    src: [require("@/assets/audio/focus.mp3")]
});
this.$engine.onFocus = () => {
    audio.play()
}
```