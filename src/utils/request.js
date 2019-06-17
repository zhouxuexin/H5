import axios from 'axios'
import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'

// create an axios instance
// let that = Vue.prototype.instance.$vux
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        !Vue.$vux.loading.isVisible() && Vue.$vux.loading.show('加载中...')
        if (store.getters.token) {
            config.headers['usertoken'] = getToken()
                // config.params.usertoken = getToken()
        } else {
            router.replace({
                name: 'login'
            })
        }
        return config
    },
    error => {
        // do something with request error
        Vue.$vux.loading.hide();
        !Vue.$vux.toast.isVisible() && Vue.$vux.toast.show({
            text: error,
            type: 'warn'
        })
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(

    response => {
        Vue.$vux.loading.hide()
        const res = response.data
            // if the custom code is not 20000, it is judged as an error.
        if (res.status !== 0) {
            // Message({
            //     message: res.message || 'Error',
            //     type: 'error',
            //     duration: 5 * 1000
            // })

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            !Vue.$vux.toast.isVisible() && Vue.$vux.toast.show({
                text: res.msg,
                type: 'warn'
            })
            if (res.code === 404 || res.code === 302 || res.code === 504) {
                // to re-login
                // MessageBox.confirm(
                //     'You have been logged out, you can cancel to stay on this page, or log in again',
                //     'Confirm logout', {
                //         confirmButtonText: 'Re-Login',
                //         cancelButtonText: 'Cancel',
                //         type: 'warning'
                //     }
                // ).then(() => {
                //     store.dispatch('user/resetToken').then(() => {
                //         location.reload()
                //     })
                // })
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res.re
        }
    },
    error => {
        Vue.$vux.loading.hide();

        !Vue.$vux.toast.isVisible() && Vue.$vux.toast.show({
            text: error,
            type: 'warn'
        })
        return Promise.reject(error)
    }
)

export default service