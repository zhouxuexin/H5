import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import borrow from './modules/borrowing'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        user,
        borrow
    },
    getters
})

export default store