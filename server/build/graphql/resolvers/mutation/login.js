'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (_, args) => {
  const authToken = {
    token: 'secretToken'
  };

  if (args.password === 'senha') {
    return authToken;
  }
  throw new Error('Invalid password');
};
//# sourceMappingURL=login.js.map