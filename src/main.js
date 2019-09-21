import Vue from "vue"
import App from "./App.vue"
// import Router from "vue-router"
import Login from "./Login.vue"

import VueRouter from "vue-router";
// 如果要使用link或者view 要下载插件
Vue.use(VueRouter)

const routes = [
    { path:"/login", component:Login }
]
const router = new VueRouter({
    routes
})

new Vue({
    el: "#app",
    // 固定写法
    router,
    render(createElement){
        return createElement(App)
    }
})