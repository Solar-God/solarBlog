import App from './App'

// #ifndef VUE3
import Vue from 'vue'
// 导入和使用uView组件
import uView from "uview-ui";
Vue.use(uView);

// 导入日期转换
import dayjs from "dayjs"
Vue.prototype.$dayjs = dayjs;

Vue.config.productionTip = false

// 导入js函数
import { request } from "./utils/request.js"
Vue.prototype.$http = request
import qs from 'qs'
Vue.prototype.$qs = qs

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif