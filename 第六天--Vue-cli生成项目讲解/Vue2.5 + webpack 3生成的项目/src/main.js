// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//在main.js引入vue模块
import Vue from 'vue'
//引入Vue的根组件
import App from './App'
//引入router文件夹下面的index.js
import router from './router'
//import 的作用就是引入JS模块,项目里面自定义的模块/node_modules
//1.如果引入的是自定义的模块，要使用相对路径引入
//2.node_modules里面的只需要写模块名就可以了.

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', //指定vue的启动位置
  router, //将vue-router的路由加载进去
  components: { App }, //将app组件注册到vue实例里面
  template: '<App/>' //Vue启动后，加载的是App组件
})
