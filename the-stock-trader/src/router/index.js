import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  {
    path: '/portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "stock" */ '../components/portfolio/Portfolio.vue'),
  },
  {
    path: '/stocks',
    component: () => import(/* webpackChunkName: "stock" */ '../components/stocks/Stocks.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;