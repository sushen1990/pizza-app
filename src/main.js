import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './router.js'


// 声明使用路由
Vue.use(VueRouter)


//配置路由
const router = new VueRouter({
    routes,
    mode:"history",
    // mode地址栏不显示#
})



new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
