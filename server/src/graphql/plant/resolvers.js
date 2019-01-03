import createPlant from './mutations/createPlant';
import updatePlant from './mutations/updatePlant';
import deletePlant from './mutations/deletePlant';

import plant from './queries/plant';
import plantsConnection from './queries/plantsConnection';

import createdAt from './plant/createdAt';
import createdBy from './plant/createdBy';

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
  Plant: {
    createdAt,
    createdBy,
  },
};
