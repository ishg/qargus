import winston from 'winston'
import moment from 'moment'
import mkdirp from 'mkdirp'

import constants from '../constants'
mkdirp.sync(constants.LOG_DIR)

winston.emitErrs = true

const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      level: 'info',
      filename: `${constants.LOG_DIR}/${moment().format()}.log`,
      json: false,
      handleExceptions: true,
      maxsize: 5242800,
      colorize: false,
      timestamp: () => {
        return moment().format()
      },
      formatter: (options) => {
        return `${options.timestamp} ${options.level.toUpperCase} ${(options.message ? options.message : '')} ${(options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : '')}`
      }
    }),
    new winston.transports.Console({
      level: 'debug',
      json: false,
      colorize: true,
      prettyPrint: true
    })
  ],
  exitOnError: false
})

module.exports = logger
module.exports.stream = {
  write: (message, encoding) => {
    logger.info(message.trim())
  }
}
