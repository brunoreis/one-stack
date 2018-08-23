'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _mutation = require('./mutation');

var _mutation2 = _interopRequireDefault(_mutation);

var _manufacturer = require('./types/manufacturer');

var _manufacturer2 = _interopRequireDefault(_manufacturer);

var _authpayload = require('./types/authpayload');

var _authpayload2 = _interopRequireDefault(_authpayload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: _query2.default,
  Mutation: _mutation2.default,
  Manufacturer: _manufacturer2.default,
  AuthPayload: _authpayload2.default
};
//# sourceMappingURL=index.js.map