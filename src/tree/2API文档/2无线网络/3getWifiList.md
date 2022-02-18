## getWifiList
> 扫描并获取所有附近wifi的信息
```
let wifi_list = await webOS.getWifiList(); // return [{
    SSID,
    MODE,
    CHAN,
    RATE,
    SIGNAL,
    BARS,
    SECURITY
}]
```