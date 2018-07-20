import Vue from 'vue'
import Router from 'vue-router'
import MemberCenter from '@/components/memberCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemberCenter',
      component: MemberCenter
    }
  ]
})
