<template>
    <div>
        {{test}}
        <h1>欢迎您访问我的网站</h1>
        {{count}}
        <button @click="add">增加count值</button>
        <ul>
            <li v-for="done in doneTodo">
                {{done.text}}
            </li>
        </ul>
    </div>
</template>

<script>
    //引用一下展开状态数据的函数
    import { mapState,mapGetters,mapMutations } from 'vuex'
    /*import store from '@/store'*/
    export default {
        name: "Home",
        data(){
          return {
              //getters计算属性的变量可以通过this.$store.getters来访问.
              doneTodo:this.$store.getters.doneTodos,
              test:this.$store.state.app.test
          }
        },
        /*computed:{
            count(){
                //return store.state.count
                return this.$store.state.count
            }
        },*/
        //传递多个值的情况下，使用mapState函数来展开
        computed:mapState([
                'count','a','b','c','d','e'
        ]),
        //可以使用对象展开运算符
        /*computed:{
            ...mapState([
                'count',
                'a',
                'b',
                'c',
                'd',
                'e'
            ]),
            ...mapGetters([
                'doneTodos'
            ])
        },*/
        methods:{
            add:function(){
                //this.$store.commit('increment')//通过commit来触发mutations的方法
                this.$store.dispatch('increment')//通过dispatch来触发actions的方法
            },
            /*...mapMutations([
                'increment'
            ])*/
        }
    }
</script>

<style scoped>

</style>