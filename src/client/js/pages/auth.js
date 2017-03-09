import Vue from 'vue'

let template = `<div class="auth-wrapper">
  <div class="columns auth-box">
    <div class="column is-4-desktop is-offset-4-desktop is-10-mobile is-offset-1-mobile is-6-tablet is-offset-3-tablet">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <label class="label">Name</label>
            <p class="control">
              <input class="input" type="text" placeholder="Text input">
            </p>
            <label class="label">Username</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-success" type="text" placeholder="Text input" value="bulma">
              <span class="icon is-small">
                <i class="fa fa-check"></i>
              </span>
              <span class="help is-success">This username is available</span>
            </p>
            <label class="label">Email</label>
            <p class="control has-icon has-icon-right">
              <input class="input is-danger" type="text" placeholder="Email input" value="hello@">
              <span class="icon is-small">
                <i class="fa fa-warning"></i>
              </span>
              <span class="help is-danger">This email is invalid</span>
            </p>
            <small><a>Forgot password?</a></small>
          </div>
        </div>
        <footer class="card-footer">
          <a class="button is-black card-footer-item">Login</a>
          <a class="button is-light card-footer-item">Register</a>
        </footer>
      </div>    
    </div>
  </div>
</div>`

const authPage = Vue.component('auth-page', {
  props: [],
  template: template
})

export default authPage
