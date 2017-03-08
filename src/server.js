// Modules
import winston from 'winston'
import moment from 'moment'
import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

// Files
//import constants from './constants'
//import logger from './util/logger'

// Configuration
const app = express()
app.use(express.static(__dirname + '/client'))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ 'extended': 'true' }))
app.use(bodyParser.json())
app.use(methodOverride())

// Api



const port = process.env.PORT || 5000
app.listen(port)

export default app
