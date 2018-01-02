import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import article from '@/components/article';
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
