import gardenerQuery from './queries/gardener';
import gardenersConnection from './queries/gardenersConnection';
import user from './queries/user';
import loggedUser from './queries/loggedUser';

import createUser from './mutations/createUser';
import updateUser from './mutations/updateUser';
import deleteUser from './mutations/deleteUser';
import updateGardener from './mutations/updateGardener';
import passwordForgot from './mutations/passwordForgot';
import passwordReset from './mutations/passwordReset';

import gardenerType from './user/gardener';
import gardensConnection from './user/gardensConnection';
import recipesConnection from './user/recipesConnection';

export default {
  Mutation: {
    createUser,
    updateUser,
    deleteUser,
    updateGardener,
    passwordForgot,
    passwordReset,
  },
  Query: {
    gardener: gardenerQuery,
    gardenersConnection,
    user,
    loggedUser,
  },
  User: {
    gardener: gardenerType,
  },
  Gardener: {
    gardensConnection,
    recipesConnection,
  },
};
