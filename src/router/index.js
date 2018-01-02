import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import articles from '@/components/articles';
import post from '@/components/post';
import store from '@/store';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/articles',
      name: 'articles',
      component: articles,
    },
    {
      path: '/post/:time',
      name: 'post',
      component: post,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && store.state.user.name !== '') {
    next();
  } else if (to.name === 'login') {
    next();
  } else {
    next('/');
  }
});

export default router;
