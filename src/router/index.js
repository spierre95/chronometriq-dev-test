import Vue from 'vue'
import Router from 'vue-router'
import TheSchedulePage from './../layout/TheSchedulePage';
import TheStaffPage from './../layout/TheStaffPage';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
        path: '/#schedule',
        name: 'TheSchedulePage',
        component: TheSchedulePage,
        alias: [
          '/'
        ],
      },
      {
        path: '/#staff',
        name: 'TheStaffPage',
        component: TheStaffPage
      }
    ] 
})