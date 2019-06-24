// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import '@/styles/public.less'
import '@/icons'
import '@/permission'
import router from './router'
import store from './store'
import { ViewBox } from 'vux'
Vue.component('view-box', ViewBox)
Vue.use(VueRouter)
import { ToastPlugin, LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)
import { ConfirmPlugin } from 'vux'
Vue.use(ConfirmPlugin)

Vue.use(ToastPlugin)

// FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')