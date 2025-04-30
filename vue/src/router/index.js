import { createRouter,createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      redirect: '/home',
      component: () => import('@/views/Home/Home.vue')
    },{
      path: '/home',
      name: '/home',
      component: () => import('@/views/Home/Home.vue')
    },{
      path: '/classify',
      name: 'classify',
      component: () => import('@/views/classify/classify.vue') 
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/views/shopping/shopping.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/profile.vue')
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component: () => import('@/views/Home/detail.vue')
    }
    
  ]
})


export default router