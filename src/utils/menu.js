const NAME = 'my_menus'
export function setMenu(data) {
    return sessionStorage.setItem(NAME, JSON.stringify(data))
}
export function getMenu() {
    return sessionStorage.getItem(NAME) ? JSON.parse(sessionStorage.getItem(NAME)) : []
}