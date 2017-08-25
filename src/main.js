import Vue from 'vue'
import App from './App.vue'
// 引入路由 来自专门放置路由的文件夹
import router from './routers'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.withCredentials = true //允许跨域
global.axios = axios
new Vue({
    el: '#app',
    router,  // vue插件机制
    render: h => h(App)
})