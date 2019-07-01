const getters = {
    token: state => state.user.token,
    menus: state => state.user.menus,
    borrowCode: state => state.borrow.borrowCode
}
export default getters