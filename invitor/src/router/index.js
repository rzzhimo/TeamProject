import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import launchAct from '@/components/launchAct'
//import test from '@/components/test'
import user from '@/components/user'
<<<<<<< HEAD
// import login from '@/components/login'
=======
import login from '@/components/login'
>>>>>>> 7d3250036bbf89c2544ee798c6fa89fee04948a5

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
<<<<<<< HEAD
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
=======
    {
      path: '/login',
      name: 'login',
      component: login
    },
>>>>>>> 7d3250036bbf89c2544ee798c6fa89fee04948a5
    
  ]
})
