import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getMenu, setMenu } from '@/utils/menu'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    menus: getMenu()
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_MENU: (state, menus) => {
        state.menus = menus
    }
}

const actions = {
    // user login
    login({ commit }, userInfo) {
        const { userName, password } = userInfo
        return new Promise((resolve, reject) => {
            login({ userName: userName.trim(), password: password })
                .then(data => {
                    commit('SET_TOKEN', data.token)
                    setToken(data.token)
                        // 设置存储菜单
                    commit('SET_MENU', data.menuList)
                    setMenu(data.menuList)
                    resolve()
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    // get user info
    getInfo({ commit, state }) {
        return new Promise((resolve, reject) => {
            getInfo(state.token)
                .then(response => {
                    const { data } = response

                    if (!data) {
                        reject('Verification failed, please Login again.')
                    }

                    const { name, avatar } = data

                    commit('SET_NAME', name)
                    commit('SET_AVATAR', avatar)
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    // user logout
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            logout(state.token)
                .then(() => {
                    commit('SET_TOKEN', '')
                    removeToken()
                        // resetRouter()
                    resolve()
                })
                .catch(error => {
                    reject(error)
                })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            removeToken()
            resolve()
        })
    },
    //getMenu

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}