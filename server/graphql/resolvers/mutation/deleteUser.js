const User = require('../../../business/user');

module.exports = async (_, args) => {
  console.log(args);
  return User.delete(_, args);
};
