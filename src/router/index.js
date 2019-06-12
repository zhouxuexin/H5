import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import teacher from './modules/teacher'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/view/login.vue')

        },
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        ...teacher
    ]
})