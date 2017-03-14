import Vue from 'vue'

let template = `<nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <a class="nav-item">
        <img src="/assets/images/logo.png" alt="Company logo">
      </a>
      <a class="nav-item is-tab is-hidden-mobile is-active">Home</a>
      <span class="nav-item">
        <a class="button is-primary">
          <span class="icon">
            <i class="material-icons">add</i>
          </span>
          <span>New Page</span>
        </a>
      </span>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <a class="nav-item is-tab is-hidden-tablet is-active">Home</a>
      <a class="nav-item">
        <span class="icon">
          <i class="material-icons left">exit_to_app</i>
        </span>
        <span>Log out</span>
      </a>
    </div>
  </div>
</nav>`

const navBar = Vue.component('nav-bar', {
  props: [],
  template: template
})

export default navBar
