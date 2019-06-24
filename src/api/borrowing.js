import request from '@/utils/request'
//图书统计，借出。在库，损坏、丢失
export function bookStatis(params) {
    return request({
        url: '/api/borrowing/statisticsAll',
        method: 'get',
        params
    })
}