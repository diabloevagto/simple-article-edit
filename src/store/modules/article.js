export const getters = {
  getPost: state => time => state.posts.find(p => p.time === time),
};

export const mutations = {
  createNewPost({ posts }) {
    posts.push({
      time: (new Date()).getTime(),
      title: '1',
      content: '2',
    });
  },
};

export const actions = {
  createNewPost({ commit }) {
    commit('createNewPost');
  },
};

export default {
  namespaced: true,
  state: {
    posts: [],
  },
  getters,
  mutations,
  actions,
};
