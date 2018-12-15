import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import launchAct from '@/components/launchAct'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/launchAct',
      name: 'launchAct',
      component: launchAct
    },
    
  ]
})
