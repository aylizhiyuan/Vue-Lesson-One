<template>
    <div>
        <h1>姓名:{{name}}</h1>
        <h2>年龄:{{age}}</h2>
    </div>
</template>
<script>
    export default {
        name: "App",
        data(){
            return {
                name:"lizhiyuan",
                age:'30'
            }
        }
    }
</script>

<style scoped>

</style>