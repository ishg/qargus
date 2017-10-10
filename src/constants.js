const LOG_DIR = process.env.QARGUS_LOG_DIR
// const DATA_DIR = process.env.QARGUS_DATA_DIR
const DATA_DIR = '/Users/ishmeet.grewal/Dev/github/qargus/data'
const LOKI_DB_FILE = `${DATA_DIR}/test_db.json`

const PAGES = 'pages'

module.exports = {
  APP_NAME: 'Qargus',
  LOG_DIR: LOG_DIR,
  DATA_DIR: DATA_DIR,
  LOKI_DB_FILE: LOKI_DB_FILE,
  PAGES: PAGES
}
