<template>
  <div class="BOX">
    <h1>{{ msg }}</h1>
    <el-form ref="form"
      label-position="top"
      @submit.native.prevent>
      <el-form-item label="使用者名稱">
        <el-input v-model="name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          @click="loginCheck">Login</el-button>
      </el-form-item>
    </el-form>
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
        this.$router.push({ name: 'articles' });
      }
    },
  },
  mounted() {
    this.updateName(this.name);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .BOX {
    width: 300px;
    height: 300px;
    border: 2px solid #444;
    box-shadow: 1px 5px 5px #666;

    position: absolute;
    left: 50%;
    top: 50%;

    margin-top: -150px;
    margin-left: -150px;

    padding: 10px;
  }
</style>
