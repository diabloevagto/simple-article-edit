<template>
  <div class>
    <h1>{{ msg }}</h1>
    <input type="text"
      placeholder="your user name"
      v-model="name">
    <button @click="loginCheck">Login</button>
    <router-view/>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const user = createNamespacedHelpers('user');

export default {
  name: 'login',
  data: () => ({
    msg: 'Login',
    name: '',
  }),
  methods: {
    ...user.mapActions(['updateName']),
    loginCheck() {
      if (this.name !== '') {
        this.updateName(this.name);
        this.$router.push({ name: 'article' });
      }
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
