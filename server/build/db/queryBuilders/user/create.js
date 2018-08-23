'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _db = require('../../db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async ({
  name,
  password,
  email
}) => {
  console.log(`Add user ${name} with password ${password}`);
  const user = {
    name,
    password: _bcrypt2.default.hashSync(password, 10),
    email
  };

  const result = await (0, _db2.default)('user').insert(user, 'id');
  user.id = result[0];
  return user;
};
//# sourceMappingURL=create.js.map