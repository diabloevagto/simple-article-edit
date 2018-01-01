export const getters = {
};

export const mutations = {
  SET_NAME(state, payload) {
    state.name = payload;
  },
};

export const actions = {
  updateName({ commit }) {
    commit('SET_NAME', 'payloadTest');
  },
};

export default {
  namespaced: true,
  state: {
    name: 'unknown',
  },
  getters,
  mutations,
  actions,
};
