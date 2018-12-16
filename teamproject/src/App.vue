<template>
  <div id="app" class="container">
    <!-- <img src="./assets/logo.png" class="logo"> -->
    <!-- <router-link to='/'>HelloWorld</router-link> -->
    <!-- <test></test> -->
    <!-- <invite-list></invite-list> -->
    <!-- <MainPage></MainPage> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
//import InviteList from './components/InviteList'
//import test from './components/test'
//import MainPage from './components/MainPage'

export default {
  name: 'App',
  components: {
    HelloWorld,
    //InviteList,
    //test,
    //MainPage
  }
}
</script>

<style scoped>
/* * {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
}

.logo {
  display: block;
  margin: 20px auto;
  height: 75px;
} */ 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
