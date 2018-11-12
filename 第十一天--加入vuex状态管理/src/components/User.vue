<template>
    <div>
        <h1>我是用户页面</h1>
        {{count}}
    </div>
</template>

<script>
    export default {
        name: "User",
        computed:{
            count(){
                return this.$store.state.count
            }
        }
    }
</script>

<style scoped>

</style>