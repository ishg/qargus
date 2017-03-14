import Vue from 'vue'

let template = `<div class="card">
  <div class="card-content">
    <aside class="menu">
      <div v-for="c in menu">
        <p class="menu-label">
          {{ c.category }}
        </p>
        <ul class="menu-list">
          <li v-for="item in c.items"><a>{{ item.name }}</a></li>
        </ul>
      </div>
    </aside>
  </div> 
</div>`

let data = {
  menu: [
    {
      category: 'General',
      items: [
        {
          name: 'Dashboard'
        },
        {
          name: 'Customers'
        }
      ]
    },
    {
      category: 'Administration',
      items: [
        {
          name: 'Team Settings'
        }
      ]
    }
  ]
}

const sideBar = Vue.component('side-bar', {
  props: [],
  template: template,
  data: () => {
    return data
  }
})

export default sideBar
