const NAME = 'my_menus'
export function setMenu(data) {
    return localStorage.setItem(NAME, JSON.stringify(data))
}
export function getMenu() {
    return JSON.parse(localStorage.getItem(NAME))
}