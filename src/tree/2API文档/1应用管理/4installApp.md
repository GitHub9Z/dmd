## installApp
> 安装最新版本应用并覆盖原版本
```
let is_success_install = await webOS.installApp({
    domain: 'APP_NAME',
    header: {
        url: 'app_download_url'
    }
}); // return true/false
```