<template>
<div>
    从接口：{{ url }} <br/>
    返回数据的状态 status 为：{{ status }} <br/>
    返回数据的状态 statusText 为：{{ statusText }}
</div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            url: 'https://api.github.com/users/cag2050',
            status: '',
            statusText: ''
        }
    },
    mounted () {
        this.$http
            // 可以设置过期时间为100ms，来模拟超时
            // .get(this.url, { timeout: 100 })
            .get(this.url)
            .then((response) => {
                console.log(response)
                this.status = response.status
                this.statusText = response.statusText
            })
            // 网络错误、url地址错误、请求超时，能被catch捕获
            .catch((error) => {
                console.log(error)
                this.status = error.status
                this.statusText = error.statusText
            })
    },
    computed: {

    },
    methods: {

    }
}
</script>

<style>

</style>
