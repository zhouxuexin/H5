const state = {
    borrowCode: ''
}

const mutations = {
    SET_CODE: (state, code) => {
        state.borrowCode = code
    },
}

const actions = {
    setCode({ commit }, data) {
        commit('SET_CODE', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}