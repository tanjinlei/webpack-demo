import Vue from "vue"
import App from "./App.vue"
// import Router from "vue-router"
import Login from "./Login.vue"
import Register from "@/pages/Register"
import VueRouter from "vue-router";
// 导入vant-ui组件
import Vant from "vant"
// 封装ajax的库
import axios from "axios"
// 如果要使用link或者view 要下载插件
Vue.use(VueRouter)
// 使用ui插件
Vue.use(Vant)

// 将axios挂载到原型
Vue.prototype.$axios = axios; // this.$axios

// 基准路径，以后每次请求都会自动在前面加上路径
axios.defaults.baseURL = "http://localhost:3000"

const routes = [
    { path:"/login", component:Login },
    { path:"/", component:Login },
    { path:"/register", component:Register },

    // { path:"/app", component:App },

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