<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <p>fireBase: {{name}}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  name: 'HelloWorld',
  data: () => ({
    msg: 'Welcome to Your Vue.js App',
  }),
  computed: {
    ...mapState(['name']),
  },
  methods: {
    ...mapActions(['updateName']),
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
