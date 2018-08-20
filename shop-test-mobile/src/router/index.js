import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Goods from '@/components/nav/profileTab/goods'
import Rattings from '@/components/nav/profileTab/rattings'
import Seller from '@/components/nav/profileTab/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          redirect: '/goods'
        },
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: '/rattings',
          name: 'Rattings',
          component: Rattings
        },
        {
          path: '/seller',
          name: 'Seller',
          component: Seller
        }
      ]
    }
  ]
})
