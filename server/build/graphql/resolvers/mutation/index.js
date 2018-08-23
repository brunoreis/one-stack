'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('./login');

var _login2 = _interopRequireDefault(_login);

var _createUser = require('./createUser');

var _createUser2 = _interopRequireDefault(_createUser);

var _deleteUser = require('./deleteUser');

var _deleteUser2 = _interopRequireDefault(_deleteUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  login: _login2.default,
  createUser: _createUser2.default,
  deleteUser: _deleteUser2.default
};
//# sourceMappingURL=index.js.map