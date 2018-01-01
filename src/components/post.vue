<template>
  <div>
    <h1>{{ getPost($route.params.time).title }}</h1>
    <h2>{{ getPost($route.params.time).time }}</h2>
    <p>{{ getPost($route.params.time).content }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('article');

export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Welcome to Your Vue.js App',
  }),
  computed: {
    ...mapGetters(['getPost']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: red;
  }
</style>
