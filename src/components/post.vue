<template>
  <div>
    <el-header>
      <el-row>
        <el-col :span="4">
          <span>
            <el-input type="text"
              v-model="title" />
          </span>
        </el-col>
        <el-col :span="12">
          <span>{{ title }}</span>
          <span> - </span>
          <span>{{ formatTime(getPost($route.params.time).time) }}</span>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"
            @click="updateCurrentPost">更新文章</el-button>
        </el-col>
      </el-row>
    </el-header>

    <el-row :gutter="20">
      <el-col :span="12">
        <textarea class="source"
          rows="50"
          v-model="content"></textarea>
      </el-col>
      <el-col :span="12">
        <vue-markdown :source="content"></vue-markdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown';
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
  components: {
    VueMarkdown,
  },
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
<style scoped lang="scss">
  el-col {
    border: 2px;
  }
  .full-height {
    height: 100%;
  }
  .source {
    width: 100%;
    font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
    font-size: 13px;
    padding: 2px;
  }
  .el-header {
    background-color: #b3c0d1;
    color: #333;
    line-height: 60px;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.5em;
  }
</style>
