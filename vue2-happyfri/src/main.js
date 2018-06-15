import Vue from 'vue'
import router from './router/'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
new Vue({
	router,
	store,
}).$mount('#app')