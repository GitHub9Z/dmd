## isAppNewest
> 判断应用是否是最新版本
```
let apps = await webOS.isAppInstalled({
    header: {
        update_time: Date
    }
}); // return true/false
```