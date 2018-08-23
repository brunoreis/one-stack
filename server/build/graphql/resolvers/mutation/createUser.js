'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../../../data/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = async (_, args) => {
  console.log(args);
  return _user2.default.create(_, args);
};
//# sourceMappingURL=createUser.js.map