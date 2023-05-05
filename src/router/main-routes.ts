import { RouteConfig } from 'vue-router';

const mainRoutes: Array<RouteConfig> = [
  {
    path: '/home',
    name: 'HomeView',
    component: ()=>import('@/views/MainView/children/HomeView/HomeView.vue'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/modelSelect',
    name: 'ModelSelect',
    component: ()=>import('@/views/MainView/children/ModelSelect/ModelSelect.vue'),
    meta: {
      title: '模块'
    }
  }
]
export default mainRoutes
