import Vue from 'vue';

export const getters = {
  getPost: state => time => state.posts[time],
};

export const mutations = {
  createNewPost({ posts }) {
    const timeKey = (new Date()).getTime();
    Vue.set(posts, timeKey, {
      time: (new Date()).getTime(),
      title: '1',
      content: '2',
    });
  },
  // insertPost({ posts }, payload) {
  //   Vue.set(posts, payload.time, payload);
  // },
  updatePost({ posts }, payload) {
    Vue.set(posts, payload.time, payload);
  },
};

export const actions = {
  createNewPost({ commit }) {
    commit('createNewPost');
  },
  // fetchPosts({ commit }) {
  //   commit('insertPost');
  // },
  updatePost({ commit }, payload) {
    commit('updatePost', payload);
  },
};

export default {
  namespaced: true,
  state: {
    posts: {},
  },
  getters,
  mutations,
  actions,
};
