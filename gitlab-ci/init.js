let config = require('../package.json')
var request = require('request');
let app_domain = config.name + '.imgker.com'
request(`http://www.imgker.com/dbline/site/get_site_info?domain=${app_domain}`, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        let app = JSON.parse(body)
        let code = String(1 + parseInt(app.header.title.split('.').join(''))).split('').join('.')
        let file_name = app.id + code
        request(`http://www.imgker.com/dbline/article/create?title=${code}&hint=${process.env.NODE_ENV}&branch=${process.env.CURRENT_BRANCH}&url=http://oss.imgker.com/${file_name}/dist/index.html&site=${app.id}&user_id=GITLAB`, function (error, response, body) {
        });
        console.log(file_name) // 请求成功的处理逻辑
    }
}); 