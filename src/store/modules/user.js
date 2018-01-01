export const getters = {
};

export const mutations = {
  SET_NAME(state, payload) {
    state.name = payload;
  },
};

export const actions = {
  updateName({ commit }, payload) {
    commit('SET_NAME', payload);
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
