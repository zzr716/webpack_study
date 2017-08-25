import Vue from 'vue'
// 路由 接管所有东西 有router-link，router-view[在匹配的路由地址显示相应的组件]
import VueRouter from 'vue-router'
Vue.use(VueRouter)  //插件机制使用
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Times from '../components/times.vue'
// 规则rules 每个规则项都是json
const routes = [
    {
        // 匹配的路由地址，显示的相应的组件
        // 将每一个地址映射为相应组件 组件会在router-view显示 
        // router-view相当于占位符 
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/times',
        component: Times
    }
]
// 路有对象 实例化一个vuerouter 
const router = new VueRouter({
    routes: routes
})
// 输出这个模块
export default router