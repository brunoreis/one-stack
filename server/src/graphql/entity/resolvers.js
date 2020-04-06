import createEntity from './mutations/createEntity';
import updateEntity from './mutations/updateEntity';
import deleteEntity from './mutations/deleteEntity';

import entity from './queries/entity';
import entities from './queries/entities';

export default {
  Mutation: {
    createEntity,
    updateEntity,
    deleteEntity,
  },
  Query: {
    entity,
    entities,
  },
};
