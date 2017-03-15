import Vue from 'vue'

import '../components/nav-bar'
import '../components/side-bar'
import '../components/main-panel'

let template = `<div>
  <nav-bar></nav-bar>
  <div class="row">
    <div class="col s12 m8 l9">
      <main-panel></main-panel>
    </div>
    <div class="col s12 m4 l3">
      <side-bar></side-bar>
    </div>
  </div>
</div>`

const homePage = Vue.component('home-page', {
  props: [],
  template: template
})

export default homePage
