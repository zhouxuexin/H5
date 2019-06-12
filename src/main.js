// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import '@/styles/public.less'
import '@/icons'
// import Home from './components/HelloFromVux'
import router from './router'
import store from './store'
Vue.use(VueRouter)
import { ToastPlugin, LoadingPlugin } from "vux"
Vue.use(LoadingPlugin)

Vue.use(ToastPlugin);

FastClick.attach(document.body)

Vue.config.productionTip = false


/* eslint-disable no-new */

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')