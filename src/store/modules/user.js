export const getters = {
};

export const mutations = {
  setName(state, payload) {
    state.name = payload;
  },
};

export const actions = {
  updateName({ commit }, payload) {
    commit('setName', payload);
  },
};

export default {
  namespaced: true,
  state: {
    name: '',
  },
  getters,
  mutations,
  actions,
};
