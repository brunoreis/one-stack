// module.exports = (_, __, context) => context.mocks.userMocks;
const User = require('../../../business/user');

module.exports = async () => User.loadAll();
// context.data.user.loadAll()
