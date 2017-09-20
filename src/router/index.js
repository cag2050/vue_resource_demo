import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueResource from '@/components/VueResource'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'VueResource',
            component: VueResource
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
})
