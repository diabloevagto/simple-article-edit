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

  /**
   * 新增文章，文章內容為預設
   *
   * @param {any} { commit }
   */
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
  /**
   * 到 firebase 取得當前使用者所有文章
   *
   * @param {any} { commit }
   */
  async fetchPosts({ commit }) {
    const posts = await article.getAllPost(store.state.user.name);
    commit('replaceAllPosts', posts);
  },
  /**
   * 更新文章，將使用者編輯內容記錄下來
   *
   * @param {any} { commit }
   * @param {Object} 文章內容，此物件包含 { time, title, content }
   */
  async updatePost({ commit }, payload) {
    await article.updatePost(store.state.user.name, payload.time, payload);
    commit('updatePost', payload);
  },
  /**
   * 刪除指定文章
   *
   * @param {any} { commit }
   * @param {number} 所要刪除的文章 time key
   */
  async deletePost({ commit }, payload) {
    await article.deletePost(store.state.user.name, payload);
    commit('deletePost', payload);
  },
  /**
   * 清除文章紀錄，只清除 store 的不改變 firebase
   *
   * @param {any} { commit }
   */
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
