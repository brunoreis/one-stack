'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _mutation = require('./mutation');

var _mutation2 = _interopRequireDefault(_mutation);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = `
schema {
  query: Query,
  mutation: Mutation
}
`;

exports.default = [Schema, _query2.default, _mutation2.default, ..._types2.default];
//# sourceMappingURL=schema.js.map