import { createStore } from 'vuex';

export default createStore({
  state: {
    demo: '测试数据',
  },
  mutations: {
    SET_DEMO: (state, data) => {
      state.demo = data;
    },
  },
  actions: {
    setDemo({ commit }, data) {
      commit('SET_DEMO', data);
    },
  },
  modules: {
  },
});
