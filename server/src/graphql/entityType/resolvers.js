import createEntityType from './mutations/createEntityType';
import updateEntityType from './mutations/updateEntityType';
import deleteEntityType from './mutations/deleteEntityType';

import entityType from './queries/entityType';
import entityTypes from './queries/entityTypes';

export default {
  Mutation: {
    createEntityType,
    updateEntityType,
    deleteEntityType,
  },
  Query: {
    entityType,
    entityTypes,
  },
};
