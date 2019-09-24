import Vue from "vue";
import App from "./App.vue";
// import Router from "vue-router"
import Login from "./Login.vue";
import Register from "@/pages/Register";
import VueRouter from "vue-router";
import Personal from "@/pages/Personal";
// 导入vant-ui组件
import Vant from "vant";
// toast（登录-弹框_提示框-拦截）
import { Toast } from "vant";
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
    // { path:"/", component:Login },
    { path:"/register", component:Register },
    { path:"/personal", component:Personal },
    // { path:"/app", component:App },

]
const router = new VueRouter({
    routes
});

// 路由守卫，就是一页面跳转之前的拦截器
// to要跳转之后的页面，去哪里
// from跳转之前的页面，来自哪里
// next 必须要调用才会执行跳转，还可以重定向。next（“/login”）
router.beforeEach((to, from, next) => {
    // 是否有token
    const hasToken = localStorage.getItem("token");

    // 判断是否是需要登陆权限的页面
    if(to.path === "/personal"){
        // 判断本地是否有token
        if(hasToken){
            // 正常跳转
            next();
        }else{
            // 没有token正常跳转正常
            next("/login")
        }
    }else{
        // 所有人都可以访问的页面正常浏览
        next();
    }

})
// axios的统一的拦截器，拦截响应
// 固定的声明
axios.interceptors.response.use( res=>{
    const {message,statusCode} = res.data;
    // console.log("拦截器"+{message,statusCode});
    
    if(statusCode === 401){
        Toast.fail(message);
    }
    // 如果token过期了，或者token无效，一般引起的原因可能token被清空，密码修改了
    if(message === "用户信息验证失败"){
        // 跳转到登录
        router.push("/login")
    }

    // 必须要返回res
    return res

})

new Vue({
    el: "#app",
    // 固定写法
    router,
    render(createElement){
        return createElement(App)
    }
})