const state = {
  bucketsList: [], // buckets列表
  crumbsList: '', // 面包屑信息
  bucketsPath: '', //  记录第一次用户点击进入的 buckets 名
};
const mutations = {
  // eslint-disable-next-line
  SET_BUCKETS_LIST: (state, value) => {
    state.bucketsList = value;
  },
  // eslint-disable-next-line
  SET_CRUMBS_LIST: (state, value) => {
    state.crumbsList = value;
  },
  // eslint-disable-next-line
  SET_BUCKETS_PATH: (state, value) => {
    state.bucketsPath = value;
  },
};

const actions = {
  setBuctetsList: ({ commit }, data) => {
    commit('SET_BUCKETS_LIST', data);
  },
  setcrumbs: ({ commit }, data) => {
    commit('SET_CRUMBS_LIST', data);
  },
  SetBucketsPath: ({ commit }, data) => {
    commit('SET_BUCKETS_PATH', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
