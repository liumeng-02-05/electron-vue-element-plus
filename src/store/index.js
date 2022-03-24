import { createStore } from 'vuex';

import Home from './module/home';
import getters from './getters';

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
    Home,
  },
  getters,
});
