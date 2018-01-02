<template>
  <div class>
    <h1>{{ msg }}</h1>
    <p>name: {{name}}</p>
    <button @click="createNewPost">createNewPost</button>
    <ul>
      <li v-for="p in allPosts"
        :key="p.time">
        <router-link :to="{ name: 'post', params: { time: p.time }}">{{formatTime(p.time)}} </router-link>
        <el-button type="text"
          @click="handleDeleteBtn(p.time)">X</el-button>
      </li>
    </ul>
    <el-dialog title="注意"
      width="30%"
      :visible.sync="dialogVisible"
      :show-close="false">
      <span>是否確定刪除</span>
      <span slot="footer"
        class="dialog-footer">
        <el-button @click="handleClick(false)">取 消</el-button>
        <el-button type="primary"
          @click="handleClick(true)">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import timeFormat from '../utility/index';

const user = createNamespacedHelpers('user');
const article = createNamespacedHelpers('article');

export default {
  name: 'articles',
  data: () => ({
    msg: 'Welcome to edit',
    dialogVisible: false,
    pickPost: null,
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
    ...article.mapActions(['createNewPost', 'fetchPosts', 'deletePost']),
    formatTime(time) {
      return timeFormat(time);
    },
    handleDeleteBtn(target) {
      this.pickPost = target;
      this.dialogVisible = true;
    },
    handleClick(bool) {
      if (bool) {
        this.deletePost({ time: this.pickPost });
      }
      this.dialogVisible = false;
    },
  },
  watch: {
    name() {
      this.updateName(this.name);
    },
  },
  mounted() {
    this.fetchPosts();
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
