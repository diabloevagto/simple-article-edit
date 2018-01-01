<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>name: {{name}}</p>
    <button @click="createNewPost">createNewPost</button>
    <ul>
      <li v-for="p in posts"
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
  name: 'HelloWorld',
  data: () => ({
    msg: 'Welcome to Your Vue.js App',
  }),
  computed: {
    ...user.mapState(['name']),
    ...article.mapState(['posts']),
  },
  methods: {
    ...user.mapActions(['updateName']),
    ...article.mapActions(['createNewPost']),
  },
  mounted() {
    this.updateName();
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
