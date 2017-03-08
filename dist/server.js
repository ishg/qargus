'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

var _logger = require('./util/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configuration


// Files
var app = (0, _express2.default)(); // Modules

app.use(_express2.default.static(_path2.default.join(__dirname, 'client')));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.urlencoded({ 'extended': 'true' }));
app.use(_bodyParser2.default.json());
app.use((0, _methodOverride2.default)());

// Api

var PORT = process.env.PORT || 5000;
app.listen(PORT);
_logger2.default.info('Qargus started on port ' + PORT);

exports.default = app;