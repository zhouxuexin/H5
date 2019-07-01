import request from '@/utils/request'
//学校图书总计
export function bookTotal(data) {
    return request({
        url: '/api/borrowing/bookStatisticsBySchool',
        method: 'post',
        data
    })
}
//图书统计，借出。在库，损坏、丢失
export function bookStatis(data) {
    return request({
        url: '/api/borrowing/statisticsAll',
        method: 'post',
        data
    })
}
//图书入库
export function storageBooks(data) {
    return request({
        url: '/api/borrowing/storageBooks',
        method: 'post',
        data
    })
}
//个人或班级借书
export function borrowingBooks(data) {
    return request({
        url: '/api/borrowing/borrowingBooks',
        method: 'post',
        data
    })
}
//正在借阅的书
export function bookUsed(data) {
    return request({
        url: '/api/borrowing/findInUse',
        method: 'post',
        data
    })
}
//借阅历史
export function borrowHistory(data) {
    return request({
        url: '/api/borrowing/findUseHistory',
        method: 'post',
        data
    })
}
//还书
export function returnBook(data) {
    return request({
        url: '/api/borrowing/retunBooks',
        method: 'post',
        data
    })
}