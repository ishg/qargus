import Vue from 'vue'

let template = `<div class="box main-panel">
  <ul class="collection page-list">
    <li class="collection-item" v-for="page in pages">
      <i class="material-icons left">assignment</i>
      {{ page.name }}
    </li>
  </ul>
</div>`

let data = {
  pages: [
    {
      '_id': '58c83435cd51b72ccd11a269',
      'name': 'eiusmod dolore deserunt sunt eu'
    },
    {
      '_id': '58c8343570a8e5361b4ebea1',
      'name': 'laborum id excepteur ad officia'
    },
    {
      '_id': '58c83435fbf43450da37fac7',
      'name': 'commodo excepteur est cupidatat elit'
    },
    {
      '_id': '58c834351d36c76f854217cf',
      'name': 'officia aliqua incididunt consequat anim'
    },
    {
      '_id': '58c83435783f9994c141dd22',
      'name': 'adipisicing cupidatat pariatur cupidatat dolore'
    },
    {
      '_id': '58c8343574865e4850da457a',
      'name': 'labore dolore ipsum aliquip do'
    },
    {
      '_id': '58c83435fff563127dd6f4ba',
      'name': 'occaecat aliquip culpa veniam enim'
    }
  ]
}

const pageList = Vue.component('page-list', {
  props: [],
  template: template,
  data: () => {
    return data
  }
})

export default pageList
