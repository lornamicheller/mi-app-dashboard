import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import Profile from '@/components/Profile'
import Appointment from '@/components/Appointment'
import WaitList from '@/components/WaitList'

Vue.use(Router)
/*eslint-disable*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/Appointment',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/WaitList',
      name: 'WaitList',
      component: WaitList
    }
  ]
  })