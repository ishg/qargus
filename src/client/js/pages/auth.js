import Vue from 'vue'

let logo = `
<div class="auth-logo">
  <h1>Q</h1>
</div>
`

let loginForm = `
<div id="login-form">
  <form name="loginForm">
    <div class="row">
      <div class="input-field col s12">
        <input id="email" name="email" type="email" required>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" name="password" type="password" required>
        <label for="password">Password</label>
        <p class="forgot-password"><a href="">Forgot Password?</a></p>
      </div>

    </div>

    <div class="row" style="text-align: center;">
      <button type="submit" class="btn waves-effect waves-light q-blue">Login</button>
    </div>
  </form>
</div>
`

let registerForm = `
<div id="register-form">
  <form name="registerForm">
    <div class="row">
      <div class="input-field col s12">
        <input id="name" name="name" type="text" required>
        <label for="name">Name</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="email" name="email" type="email" required>
        <label for="email">Email</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input id="password" name="password" type="password" required>
        <label for="password">Password</label>
      </div>
    </div>
    <div class="row" style="text-align: center;">
      <button type="submit" class="btn waves-effect waves-light q-blue">Register</button>
    </div>
  </form>
</div>
`

let template = `
<div class="auth-wrapper">
  <div class="container">
    <div class="row">
      <div class="col s12 m6 offset-m3 l4 offset-l4">
        ${logo}
        <div class="card auth-box">
          <ul class="tabs">
            <li class="tab col s6"><a href="#login-form">Login</a></li>
            <li class="tab col s6"><a href="#register-form">Register</a></li>
          </ul>
          <div class="card-content">
            ${loginForm}
            ${registerForm}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

const authPage = Vue.component('auth-page', {
  props: [],
  template: template,
  mounted: () => {
    $('ul.tabs').tabs()
  }
})

export default authPage
