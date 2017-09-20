# vue_resource_demo

核心代码：
```
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
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
