import Vue from 'vue'

import './pages/auth'
import './pages/home'
import './pages/write'

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    loggedIn: true,
    writing: true
  }
})
