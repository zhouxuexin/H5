import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login/loginpassword',
        method: 'post',
        params: data
    })
}

export function getInfo(token) {
    return request({
        url: '/api/account/getAccountInfo',
        method: 'get',
        params: { token }
    })
}

export function logout() {
    return request({
        url: '/user/logout',
        method: 'post'
    })
}