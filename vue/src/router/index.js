import { createRouter,createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: () => import('@/views/Home.vue').catch(() => ({ 
        template: '<div>加载失败</div>' })),
    },{
      path: '/home',
      name: '/home',
      component: () => import('@/views/Home.vue').catch(() => ({ 
        template: '<div>加载失败</div>' 
      })),
    }
    ,{
      path: '/classify',
      name: 'classify',
      component: () => import('@/views/classify.vue').catch(() => ({ 
        template: '<div>加载失败</div>' 
      })),  
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: () => import('@/views/shopping.vue').catch(() => ({ 
        template: '<div>加载失败</div>' 
      })),  
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile.vue').catch(() => ({ 
        template: '<div>加载失败</div>' 
      } )),
    }
    
  ]
})


export default router