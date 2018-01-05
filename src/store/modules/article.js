import Vue from 'vue';
import store from '@/store';
import article from '../../service/firebase/article';


export const getters = {
  getPost: state => time => state.posts[time],
};

export const mutations = {
  createNewPost({ posts }, payload) {
    Vue.set(posts, payload.time, payload);
  },
  replaceAllPosts(state, payload) {
    state.posts = Object.assign({}, payload);
  },
  updatePost({ posts }, payload) {
    Vue.set(posts, payload.time, payload);
  },
  deletePost({ posts }, payload) {
    Vue.delete(posts, payload);
  },
};

export const actions = {
  async createNewPost({ commit }) {
    const timeKey = (new Date()).getTime();
    const newPost = {
      time: timeKey,
      title: 'new',
      content: '# h1\n## h2\n\n* one\n* two\n\n1. one\n2. two\n\n~~delete~~\n\n*italic*',
    };

    await article.createPost(store.state.user.name, newPost);
    commit('createNewPost', newPost);
  },
  async fetchPosts({ commit }) {
    const posts = await article.getAllPost(store.state.user.name);
    commit('replaceAllPosts', posts);
  },
  async updatePost({ commit }, payload) {
    await article.updatePost(store.state.user.name, payload.time, payload);
    commit('updatePost', payload);
  },
  async deletePost({ commit }, payload) {
    await article.deletePost(store.state.user.name, payload);
    commit('deletePost', payload);
  },
  clearAllPost({ commit }) {
    commit('replaceAllPosts', {});
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
