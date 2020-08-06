import Vue from 'vue'
import Router from 'vue-router'
import Schedule from './../components/Schedule'
import Staff from './../components/Staff'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/#schedule',
        name: 'Schedule',
        component: Schedule
      },
      {
        path: '/#staff',
        alias: [
          '/'
        ],
        name: 'Staff',
        component: Staff
      }
    ] 
})