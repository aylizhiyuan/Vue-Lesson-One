<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--显示的内容，让vue-router来控制-->
    <router-view/>
  </div>
</template>

<script>
//暴露一个接口 default 默认暴露的接口
export default {
  name: 'App' //组件的名称叫什么
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
