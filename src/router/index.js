import Vue from 'vue'
import Router from 'vue-router'
import Activity from '@/components/Activity'
import Therapists from '@/components/Therapists'
import Users from '@/components/Users'
import Analytics from '@/components/Analytics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/therapists',
      name: 'Therapists',
      component: Therapists
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/analytics',
      name: 'Analytics',
      component: Analytics
    },
    { path: '*', redirect: '/activity' }
  ]
})
