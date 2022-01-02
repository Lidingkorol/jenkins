
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/test', component: resolve => require(['@/views/test'],resolve)   }
    ]
  })

  router.beforeEach((from , to, next) => {
      console.log(from , to)
      next()
  })
export default router;