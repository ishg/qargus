import Loki from 'lokijs'
import shortid from 'shortid'
import moment from 'moment'
import constants from '../constants.js'
import logger from '../util/logger.js'

export default class Page {
  constructor () {
    this.db = new Loki(constants.LOKI_DB_FILE)
    if (!this.db.getCollection(constants.PAGES)) {
      this.db.addCollection(constants.PAGES)
    }
    this.coll = this.db.getCollection(constants.PAGES)
  }

  getAll () {
    return this.coll.find()
  }

  insert (page) {
    return new Promise((resolve, reject) => {
      const entry = page
      entry.id = shortid.generate()
      entry.timestamp = moment().unix()
      const result = this.coll.insert(entry)
      if (result === 'undefined') {
        reject({
          status: 500,
          message: 'There was an error inserting the document'
        })
      } else {
        this.db.saveDatabase()
        resolve(entry.id)
      }
    })
  }

  getOne (id) {
    return this.coll.find({'id': id})
  }

  modify (id, data) {

  }

  delete (id) {

  }
}
