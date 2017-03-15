import Vue from 'vue'

let template = `
<div class="auth-wrapper">
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4">
        <div class="card auth-box">
          <div class="card-content">
            <span class="card-title">Auth Page</span>
          </div>
        </div>
      </div>
    </div>
  </div>  
</div>`

const authPage = Vue.component('auth-page', {
  props: [],
  template: template
})

export default authPage
