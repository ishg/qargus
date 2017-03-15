import Vue from 'vue'
import MediumEditor from 'medium-editor'

import '../components/nav-bar'

let template = `
<div class="container">
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="input-field col s12" style="margin-top: 0;">
          <input value="New Page" id="page_title" class="card-title" type="text" placeholder="Enter a title">
        </div>
      </div>
      <div class="editor"></div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="input-field col s11">
          <select>
            <option value="" disabled selected>Choose a team</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Team</label>
        </div>
        <div class="input-field col s1">
          <a class="btn-floating btn blue lighten-3">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s11">
          <select multiple>
            <option value="" disabled selected>Uncategorized</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Categories</label>
        </div>
        <div class="input-field col s1">
          <a class="btn-floating btn blue lighten-3">
            <i class="material-icons">add</i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <label class="activey">Tags</label>
          <div class="chips chips-placeholder"></div>
        </div>
      </div>
      <div class="row">
        <div class="col s12 file-field input-field">
          <label class="activey">Attachments</label>
          <div class="btn blue lighten-3">
            <span>File</span>
            <input type="file" multiple>
          </div>
          <div class="file-path-wrapper">
            <input class="file-path validate" type="text" placeholder="Upload one or more files">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <div class="row">
        <div class="col s12 m8" style="line-height: 36px;">
            <div class="switch" style="display:inline;">
              <label style="font-size: 1rem;">
                Draft
                <input type="checkbox">
                <span class="lever"></span>
                Publish
              </label>
            </div>
            <div style="margin-left: 4rem; display: inline;">
              <input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />
              <label for="filled-in-box">Allow Edits</label>
            </div>
        </div>
        <div class="col s6 offset-s3 m4">
          <button class="btn waves-effect waves-light q-green right" style="padding: 0 1rem;">save
            <i class="material-icons right">done</i>
          </button>
        </div>          
      </div>
    </div>
  </div>
</div>
`

export default Vue.component('write-page', {
  props: [],
  template: template,
  mounted () {
    const editor = new MediumEditor('.editor', {
      placeholder: {
        text: 'Click to edit',
        hideOnClick: true
      },
      paste: {
        forcePlainText: false,
        cleanPastedHTML: true,
        cleanAttrs: ['style', 'dir'],
        cleanTags: ['label', 'meta']
      },
      autoLink: true,
      toolbar: {
        buttons: ['bold', 'italic', 'quote'],
        diffLeft: 0,
        diffTop: -10
      },
      anchor: {
        placeholderText: 'Type a link',
        customClassOption: 'btn',
        customClassOptionText: 'CreateButton'
      },
      anchorPreview: {
        hideDelay: 300
      }
    })

    $('.chips-placeholder').material_chip({
      placeholder: '+Tag',
      secondaryPlaceholder: 'Add a tag and press enter'
    })

    $('select').material_select()
  }
})
