import Vue from 'vue'
import Router from 'vue-router'
import Design from '@/pages/Design.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Design',
      component: Design
    }
  ]
})
