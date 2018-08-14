const User = require('../../../business/user');

// module.exports = (_, __, context) => context.mocks.userMocks[0];
module.exports = async (_, args, context) => User.load(context, args);
