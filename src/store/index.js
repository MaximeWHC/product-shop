import Vuex from 'vuex'
const store = new Vuex.Store({
    state: {
        user: null // 存储用户信息
      },
      mutations: {
        SET_USER(state, user) {
          state.user = user
        }
      }
})

export default store
