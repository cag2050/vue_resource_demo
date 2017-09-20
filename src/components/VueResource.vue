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
            .get(this.url)
            .then((response) => {
                console.log(response)
                this.status = response.status
                this.statusText = response.statusText
            })
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
