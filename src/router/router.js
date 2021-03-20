import VueRouter from 'vue-router';
import About from '@/components/pages/About.vue';
import Work from '@/components/pages/Work.vue';
import Blog from '@/components/pages/Blog.vue';

export default new VueRouter({
  base: '/website',
  routes: [
    { path: '/', redirect: '/about' },
    {
      path: '/about',
      component: About,
      meta: { title: 'ABOUT ME' },
    },
    {
      path: '/work',
      component: Work,
      meta: { title: 'WORK' },
    },
    {
      path: '/blog',
      component: Blog,
      meta: { title: 'BLOG' },
    },
  ],
});
