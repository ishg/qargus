import Vue from 'vue'

let template = `<nav>
    <div class="nav-wrapper q-blue">
      <a href="#" class="logo">Q</a>
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
          <a class="waves-effect waves-light btn pink darken-1 new-page-button">
            <i class="material-icons left">add</i>
            <i class="material-icons">description</i>
          </a>
        </li>
        <li><a href="collapsible.html"><i class="material-icons">exit_to_app</i></a></li>
      </ul>
    </div>
  </nav>`

const navBar = Vue.component('nav-bar', {
  props: [],
  template: template
})

export default navBar
