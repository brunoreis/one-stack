'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../../db/queryBuilders/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async () => {
  const data = await _user2.default.getAll();
  if (!data) return null;

  return data;
};
//# sourceMappingURL=loadAll.js.map