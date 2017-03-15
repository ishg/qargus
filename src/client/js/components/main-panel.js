import Vue from 'vue'

let template = `<div class="main-panel">
  <div class="card">
    <div class="card-content">
      <span class="card-title">Pages</span>
    </div>
    <ul class="collection page-collection">
      <li class="collection-item avatar" v-for="page in pages">
        <i class="material-icons circle blue">description</i>
        <span class="title">{{ page.name }}</span>
        <p>
          Author
          <br>
          <span class="collection-item-timestamp">Timestamp</span>
        </p>
      </li>
    </ul>
  </div>
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

const mainPanel = Vue.component('main-panel', {
  props: [],
  template: template,
  data: () => {
    return data
  }
})

export default mainPanel
