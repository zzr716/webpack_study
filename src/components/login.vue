<template>
<div>
<input type="text" v-model="phone" />
<input type="password" v-model="pwd" />
<button type="button" @click="login">登录</button>
</div>
</template>
<script>
export default {
    data () {
        return {
            phone: '',
            pwd: ''
        }
    },
    methods: {
        login () {
            const that = this
            // get/post/update...
            axios.post('api/login', {
                // 请求一个地址并且可以传参
                pwd: this.pwd,
                telphone: this.phone
            }).then((response) => {
                // 传过来的是文本
                console.log(response)
                let { data } = response
                if (data.code == 200) {
                    // alert(data.msg)
                    // js内触发路由的跳转
                    this.$router.push('/home')
                } else {
                    alert(data.errmsg)
                }
            })
        }
    }
}
</script>
<style>
</style>