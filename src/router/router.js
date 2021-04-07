import VueRouter from 'vue-router';
import About from '@/components/pages/About.vue';
import Work from '@/components/pages/Work.vue';

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
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
