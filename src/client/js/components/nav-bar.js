import Vue from 'vue'
import VueRouter from 'vue-router'

let template = `
<nav>
  <div class="nav-wrapper q-blue">
    <router-link to='/home' class="logo">Q</router-link>
    <ul class="right">
      <li>
        <form id="search-box">
          <div class="input-field">
            <input id="search" placeholder="Search..." type="search" />
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
          </div>
        </form>
      </li>
      <li>
        <router-link to="/write" class="waves-effect waves-light btn pink darken-1 new-page-button">
          <i class="material-icons left">add</i>
          <i class="material-icons">description</i>
        </router-link>
      </li>
      <li>
        <router-link to='/auth'>
          <i class="material-icons">exit_to_app</i>
        </router-link>
      </li>
    </ul>
  </div>
</nav>
`

const navBar = Vue.component('nav-bar', {
  props: [],
  template: template
})

export default navBar
