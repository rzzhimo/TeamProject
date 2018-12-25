import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import launchAct from '@/components/launchAct'
//import test from '@/components/test'
import user from '@/components/user'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/test',
    //   name: 'test',
    //   component: test
    // },
    {
      path: '/launchAct',
      name: 'launchAct',
      component: launchAct
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    
  ]
})
