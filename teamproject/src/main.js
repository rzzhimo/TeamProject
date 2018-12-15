// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import router from './router' 
import 'bootstrap/dist/css/bootstrap.min.css'//引入了bootstrop4库
import BootstrapVue from 'bootstrap-vue'

=======
import router from './router'
import BootstrapVue from 'bootstrap-vue'


>>>>>>> 23220917f5e7970cc77663680a85394962c0c10a
Vue.use(BootstrapVue);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
