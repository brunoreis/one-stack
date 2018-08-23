'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('../../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async ({
  id
}) => {
  const result = await (0, _db2.default)('user').where('id', id).del('id');
  console.log('Deleted user with id ', result[0]);
  return result[0];
};
//# sourceMappingURL=del.js.map