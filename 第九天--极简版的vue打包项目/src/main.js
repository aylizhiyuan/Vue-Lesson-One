//项目的入口文件
import Vue from 'vue'
import App from './components/app'
new Vue({
    el:"#app",
    render: h=>h(App)
})