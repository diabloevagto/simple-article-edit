<template>
  <div class>
    <h1>{{ msg }}</h1>
    <p>name: {{name}}</p>
    <button @click="createNewPost">createNewPost</button>
    <ul>
      <li v-for="p in allPosts"
        :key="p.time">
        <router-link :to="{ name: 'post', params: { time: p.time }}">{{p.time}} </router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const user = createNamespacedHelpers('user');
const article = createNamespacedHelpers('article');

export default {
  name: 'articles',
  data: () => ({
    msg: 'Welcome to edit',
  }),
  computed: {
    ...user.mapState(['name']),
    ...article.mapState(['posts']),
    allPosts() {
      return Object
        .values(this.posts)
        .sort((a, b) => a.time < b.time);
    },
  },
  methods: {
    ...user.mapActions(['updateName']),
    ...article.mapActions(['createNewPost']),
  },
  watch: {
    name() {
      this.updateName(this.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
