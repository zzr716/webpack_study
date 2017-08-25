<template>
<div>
{{res}}
<br>
<br>
<router-link :to="{path: '/'}"></router-link>
</div>
</template>
<script>
export default {
    data () {
        return {
            res: ''
        }
    },
    // 生命周期函数 也是钩子 该执行时自动执行 组件挂载到页面上去了 
    // 发送ajax请求的最佳时机
    mounted () {
        axios.get('api').then(response => {
            this.res = response.data.msg
        })
    }
}
</script>
<style>
</style>