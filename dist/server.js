'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Files
//import constants from './constants'
//import logger from './util/logger'

// Configuration
var app = (0, _express2.default)(); // Modules

app.use(_express2.default.static(__dirname + '/client'));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ 'extended': 'true' }));
app.use(_bodyParser2.default.json());
app.use((0, _methodOverride2.default)());

// Api


var port = process.env.PORT || 5000;
app.listen(port);

exports.default = app;