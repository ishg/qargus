import Vue from 'vue'
import MediumEditor from 'medium-editor'
import $ from 'jquery'

import navBar from './components/nav-bar'
import authPage from './pages/auth'
import homePage from './pages/home'

let app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
    loggedIn: false
  }
})
