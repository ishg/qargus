import Vue from 'vue'
import VueRouter from 'vue-router'

import './components/nav-bar.js'
import AuthPage from './pages/auth'
import HomePage from './pages/home'
import WritePage from './pages/write'

const routes = [
  { path: '/home', component: HomePage },
  { path: '/auth', component: AuthPage },
  { path: '/write', component: WritePage },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes: routes
})

Vue.use(VueRouter)

const app = new Vue({
  router: router
}).$mount('#app')
