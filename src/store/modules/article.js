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
  insertPost(state, payload) {
    state.posts = Object.assign({}, payload);
  },
  updatePost({ posts }, payload) {
    Vue.set(posts, payload.time, payload);
  },
  deletePost({ posts }, payload) {
    Vue.delete(posts, payload.time);
  },
};

export const actions = {
  async createNewPost({ commit }) {
    const timeKey = (new Date()).getTime();
    const newPost = {
      time: timeKey,
      title: 'new',
      content: 'new content',
    };

    await article.createPost(store.state.user.name, newPost);
    commit('createNewPost', newPost);
  },
  async fetchPosts({ commit }) {
    const posts = await article.getAllPost(store.state.user.name);
    commit('insertPost', posts);
  },
  async updatePost({ commit }, payload) {
    commit('updatePost', payload);
  },
  async deletePost({ commit }, payload) {
    commit('deletePost', payload);
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
