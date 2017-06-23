import Vue from 'vue'
import Router from 'vue-router'
import Design from '@/views/oa/workflow/form/Design.vue'
import Home from "@/pages/Home.vue"
import Main from "@/pages/Main.vue"
import Login from "@/pages/Login.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      component: Home,
      children: [
      { path: '/main', component: Main, name: '主页' },
        {
          path:'/design',
          name:'Design',
          component:Design
        }
    ]
    }
  ]
})
