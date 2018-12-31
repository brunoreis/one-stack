import createPlant from './mutations/createPlant';
import updatePlant from './mutations/updatePlant';
import deletePlant from './mutations/deletePlant';
import plant from './queries/plant';
import plantsConnection from './queries/plantsConnection';

export default {
  Mutation: {
    createPlant,
    updatePlant,
    deletePlant,
  },
  Query: {
    plant,
    plantsConnection,
  },
};
