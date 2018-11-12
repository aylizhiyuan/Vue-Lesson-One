/*入口JS文件*/
document.querySelector("#app").innerHTML = 'hello vue'
/*引入其他的JS文件*/
//通过commonJS标准来引入JS模块
require('./a.js')
//通过ES6标准引入JS模块
import test from './b.js'
console.log(test.data)
//可以引入多个JS文件

//在JS文件中引入CSS文件
//加上loader处理模块，处理后，webpack变可以解析css文件了
//css-loader用来解析css命令,style-loader可以将CSS插入到index.html页面里面去
//import '!style-loader!css-loader!./main.css'

//在JS中引入scss文件
//import '!style-loader!css-loader!sass-loader!./index.scss'

//用配置文件来制定自己的打包流程
import './main.css'
import './index.scss'


//引入Vue
//import Vue from 'vue'
const Vue = require('vue/dist/vue');
new Vue({
    el:"#main",
    data:{
        message:"a vue"
    }
})








