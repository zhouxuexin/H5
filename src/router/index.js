import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import teacher from './modules/teacher'
import librarian from './modules/librarian'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/login',
            name: 'login',
            meta: {
                index: -1,
                title: '登录'
            },
            component: () =>
                import ('@/view/login.vue')
        },
        {
            path: '/',
            name: 'Home',
            meta: {
                title: '首页',
                index: 0
            },
            component: Home
        },
        ...teacher,
        ...librarian
    ]
})