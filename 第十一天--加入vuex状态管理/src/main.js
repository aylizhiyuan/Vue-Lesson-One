//项目的入口文件
import Vue from 'vue'
import App from './App'
//加载路由文件
import router from '@/routes'
//加载公共的仓库
import store from '@/store'

new Vue({
    el:"#app",
    router,
    store,
    render: h=>h(App)
})