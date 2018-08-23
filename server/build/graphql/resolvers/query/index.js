'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manufacturers = require('./manufacturers');

var _manufacturers2 = _interopRequireDefault(_manufacturers);

var _manufacturer = require('./manufacturer');

var _manufacturer2 = _interopRequireDefault(_manufacturer);

var _products = require('./products');

var _products2 = _interopRequireDefault(_products);

var _user = require('./user');

var _user2 = _interopRequireDefault(_user);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  manufacturer: _manufacturer2.default,
  manufacturers: _manufacturers2.default,
  products: _products2.default,
  user: _user2.default,
  users: _users2.default
};
//# sourceMappingURL=index.js.map