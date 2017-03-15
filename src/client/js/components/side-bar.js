import Vue from 'vue'

let template = `
<div>
  <div class="card">
    <div class="card-content">
      <span class="card-title">Browse</span>
    </div>
    <ul class="collapsible side-menu" data-collapsible="expandable">
      <li v-for="m in menu">
        <div class="collapsible-header"><i class="material-icons right">{{m.icon}}</i>{{m.header}}</div>
        <div class="collapsible-body">
          <div class="collection">
            <a href="#!" class="collection-item" v-for="item in m.items">
              {{ item.name }}
            </a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`

let data = {
  menu: [
    {
      header: 'Teams',
      icon: 'people_outline',
      items: [
        {
          name: 'S&P'
        },
        {
          name: 'DE'
        },
        {
          name: 'AI'
        }

      ]
    },
    {
      header: 'Categories',
      icon: 'folder_open',
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
      header: 'Tags',
      icon: 'label_outline',
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
  },
  mounted () {
    $('.collapsible').collapsible()
  }
})

export default sideBar
