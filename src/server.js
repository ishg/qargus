// Modules
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import path from 'path'

// Files
import constants from './constants'
import logger from './util/logger'

// Configuration
const app = express()
app.use(express.static(path.join(__dirname, 'client')))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ 'extended': 'true' }))
app.use(bodyParser.json())
app.use(methodOverride())

// Api

const PORT = process.env.PORT || 5000
app.listen(PORT)
logger.info(`Qargus started on port ${PORT}`)

export default app
