//路由文件
import Vue from 'vue'
import Router from 'vue-router'
//引入组件
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    routes:[
        //写你的路由规则
        {
            path:"/",
            component:Home
        }
    ]
})