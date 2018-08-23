'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _del = require('./del');

var _del2 = _interopRequireDefault(_del);

var _getAll = require('./getAll');

var _getAll2 = _interopRequireDefault(_getAll);

var _getById = require('./getById');

var _getById2 = _interopRequireDefault(_getById);

var _getByIds = require('./getByIds');

var _getByIds2 = _interopRequireDefault(_getByIds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  create: _create2.default,
  del: _del2.default,
  getAll: _getAll2.default,
  getById: _getById2.default,
  getByIds: _getByIds2.default
};
//# sourceMappingURL=index.js.map