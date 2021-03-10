import VueRouter from 'vue-router';
import About from '@/components/pages/About.vue';
import Work from '@/components/pages/Work.vue';
import Blog from '@/components/pages/Blog.vue';

export default new VueRouter({
  routes: [
    { path: '/',
      redirect: '/about',
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/work',
      component: Work
    },
    {
      path: '/blog',
      component: Blog
    }
  ]
});
