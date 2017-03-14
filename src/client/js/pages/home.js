import Vue from 'vue'

import '../components/nav-bar'
import '../components/side-bar'
import '../components/page-list'

let template = `<div>
  <nav-bar></nav-bar>
  <div class="container">
    <div class="columns">
      <div class="column is-narrow"><side-bar></side-bar></div>
      <div class="column"><page-list></page-list></div>
    </div>
  </div>
</div>`

const homePage = Vue.component('home-page', {
  props: [],
  template: template
})

export default homePage
