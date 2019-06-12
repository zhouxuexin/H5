import request from '@/utils/request'

export function getMenu(params) {
    return request({
        url: '/api/menu/allMenuTree',
        method: 'get',
        params
    })
}