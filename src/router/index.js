import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import article from '@/components/article';
import post from '@/components/post';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      children: [{
        path: '/post/:time',
        name: 'post',
        component: post,
      }],
    },

  ],
});
