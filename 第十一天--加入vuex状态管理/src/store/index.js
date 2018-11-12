//公共的仓库
import Vue from 'vue'
import Vuex from 'vuex'
import app from '@/store/module/app'
import user from '@/store/module/user'

Vue.use(Vuex)

//创建一个仓库
const store = new Vuex.Store({
    modules:{
        app, //一个分模块的状态树
        user //一个分模块的状态树
    },
    //第一能存数据
    state:{
        count:0,
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        todos:[
            {id:1,text:'测试数据1',done:true},
            {id:2,text:'测试数据2',done:false}
        ]
    },
    //getters是对于state数据的计算属性
    getters:{
        doneTodos:state=>{
            return state.todos.filter(todo=>todo.done)
        }
    },
    //第二能存方法
    //mutations里面是用来改变state数据的
    //也只能在mutations里面来改
    //它里面只能放同步的代码
    mutations:{
        increment(state){
            state.count ++
        }
    },
    //用来触发mutations里面的方法
    //可以异步代码
    //actions主要的功能是为了封装一下mutations，以后调用方法的时候
    //直接调用actions里面的方法就可以了。
    actions:{
        increment({commit}){
            commit('increment')
        }
    }
})
export default store
