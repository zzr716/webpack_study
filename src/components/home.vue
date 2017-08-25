<template>
<div>
<h2>Login</h2>
{{res}}
<br>
<p>data为后台存储的token，此处为了测试，实际应用不必带回 已经在cookie种下了</p>
<button type="button" @click="signOut">退出</button>
</div>
</template>
<script>
export default {
    data () {
        return {
            res: null
        }
    },
    mounted () {
        // 自带cookie
        axios.get('api/home').then(res => {
            this.res = res.data.token?res.data.token:res.data.msg
        })
    },
    methods: {
        signOut () {
            axios.post('api/signout').then(res => {
                // this.res = res.data
                this.$router.push('/')
            })
        }
    }
}
</script>
<style>
</style>