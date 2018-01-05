<template>
  <div>
    <el-header>
      <el-row>
        <el-col :span="8">
          <span>{{ msg }}</span>
        </el-col>
        <el-col :span="8">
          <span>{{name}}</span>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"
            @click="createNewPost">新增文章</el-button>
        </el-col>
      </el-row>
    </el-header>
    <ul>
      <li v-for="p in allPosts"
        :key="p.time">
        <el-card class="box-card">
          <div slot="header"
            class="clearfix">
            <router-link :to="{ name: 'post', params: { time: p.time }}">{{formatTime(p.time)}} </router-link>
            <el-button type="text"
              style="float: right; padding: 2px 0"
              @click="handleDeleteBtn(p.time)">X</el-button>
          </div>
          <div>
            {{p.title }}
          </div>
        </el-card>
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
          @click="handleClick(true)">確 定</el-button>
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
    msg: '編輯頁',
    dialogVisible: false,
    pickPost: null,
  }),
  computed: {
    ...user.mapState(['name']),
    ...article.mapState(['posts']),
    allPosts() {
      return Object
        .values(this.posts)
        .filter(it => typeof it === 'object')
        .sort((a, b) => b.time - a.time);
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
        this.deletePost(this.pickPost);
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
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 10px;
  }
  a {
    color: #42b983;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.5em;
  }
  .box-card {
    width: 180px;
  }
</style>
