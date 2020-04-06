import createUser from './mutations/createUser';
import updateUser from './mutations/updateUser';
import deleteUser from './mutations/deleteUser';
import passwordForgot from './mutations/passwordForgot';
import passwordReset from './mutations/passwordReset';

import user from './queries/user';
import users from './queries/users';

export default {
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    passwordForgot,
    passwordReset,
  },
  Query: {
    user,
    users,
  },
};
