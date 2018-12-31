import gardener from './queries/gardener';
import gardenersConnection from './queries/gardenersConnection';
import user from './queries/user';
import loggedUser from './queries/loggedUser';

export default {
  // Mutation: {
  //   createPlant,
  //   updatePlant,
  //   deletePlant,
  // },
  Query: {
    gardener,
    gardenersConnection,
    user,
    loggedUser,
  },
};
