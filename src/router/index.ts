import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import useAppStore from '@/store';
import getPina from '@/plugins/get-pina';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('@/views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
const pinia = getPina()

const appStore = useAppStore(pinia)
// 前置路由首位
router.beforeEach((to, from, next)=>{
  // 校验是否登录成功
  if(!appStore.isLogin && to.path !=='/login'){
    next('/login')
    return
  }
  next()
})

export default router;
