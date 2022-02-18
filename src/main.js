import Vue from 'vue'
import App from './App.vue'
const modulesFiles = require.context("./tree", true)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  modulePath.split(/\/|\./).reduce((_modules, _modulesPath) => {
    _modulesPath = _modulesPath.replace(/[0-9]+/g,"")
    if (!_modulesPath) return modules
    if (_modulesPath === 'md') {
      _modules.content = require('@/tree/' + modulePath.replace('./', ''))
      return
    }
    return _modules[_modulesPath] || (_modules[_modulesPath] = {})
  }, modules)
  return modules
  // const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  // const value = modulesFiles(modulePath)
  // modules[moduleName] = value.default
  // return modules
}, {})

Vue.config.productionTip = false
Vue.prototype.$tree = modules
new Vue({
  render: h => h(App),
}).$mount('#app')
