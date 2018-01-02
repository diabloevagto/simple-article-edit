<template>
  <div>
    <h1>預覽</h1>
    <h1>title: {{ getPost($route.params.time).title }}</h1>
    <h2>time: {{ formatTime(getPost($route.params.time).time) }}</h2>
    <p>content: {{ getPost($route.params.time).content }}</p>
    <hr>
    <h1>修改區</h1>
    <p>title: {{title}}</p>
    <p>content: {{content}}</p>
    <br>
    <input type="text"
      v-model="title">
    <br>
    <textarea v-model="content"
      cols="30"
      rows="10"></textarea>
    <button @click="updateCurrentPost">update post</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import timeFormat from '../utility/index';

const user = createNamespacedHelpers('user');
const article = createNamespacedHelpers('article');

export default {
  name: 'post',
  data: () => ({
    title: '',
    content: '',
  }),
  computed: {
    ...user.mapState(['name']),
    ...article.mapGetters(['getPost']),
  },
  methods: {
    ...article.mapActions(['updatePost']),
    formatTime(time) {
      return timeFormat(time);
    },
    updateCurrentPost() {
      this.updatePost({
        time: this.$route.params.time,
        title: this.title,
        content: this.content,
      });
    },
  },
  mounted() {
    this.title = this.getPost(this.$route.params.time).title;
    this.content = this.getPost(this.$route.params.time).content;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: red;
  }
  textarea {
    margin: 10px;
  }
</style>
