export const getters = {
};

export const mutations = {
  setName(state, payload) {
    state.name = payload;
  },
};

export const actions = {

  /**
   * 設定使用者名稱
   *
   * @param {any} { commit }
   * @param {string} 使用者的名稱
   */
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
