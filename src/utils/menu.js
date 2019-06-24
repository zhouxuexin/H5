const NAME = 'my_menus'
export function setMenu(data) {
    return sessionStorage.setItem(NAME, JSON.stringify(data))
}
export function getMenu() {
    return JSON.parse(sessionStorage.getItem(NAME))
}