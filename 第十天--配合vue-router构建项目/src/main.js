//项目的入口文件
import Vue from 'vue'
import App from './App'
//加载路由文件
import router from '@/routes'

new Vue({
    el:"#app",
    router,
    render: h=>h(App)
})