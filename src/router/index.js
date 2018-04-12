import Vue from 'vue'
import Router from 'vue-router'
import Company from '@/components/month_info/info_company'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Company',
      component: Company
    }
  ]
})
