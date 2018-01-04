<template>
  <div class="BOX">
    <h1>{{ msg }}</h1>
    <el-form ref="form"
      label-position="top"
      :model="form"
      @submit.native.prevent>
      <el-form-item label="使用者名稱"
        prop="name"
        :rules="form.namerRules">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
          @click="submitForm('form')">Login</el-button>
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
    form: {
      name: '',
      namerRules: [{ required: true, message: '使用者名稱不能為空' }],
    },
  }),
  methods: {
    ...user.mapActions(['updateName']),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.updateName(this.form.name);
          this.$router.push({ name: 'articles' });
        }
        return valid;
      });
    },
  },
  mounted() {
    this.updateName(this.form.name);
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
