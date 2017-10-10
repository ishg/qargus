import express from 'express'
import moment from 'moment'
import Page from '../dao/page'

const router = express.Router()

router.get('/pages', (req, res) => {
  const page = new Page()
  page.getAll((err, result) => {
    if (err) return res.status(500).send(err.message)
    res.json(result)
  })
})

module.exports = router
