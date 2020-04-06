import createEntityMember from './mutations/createEntityMember';
import updateEntityMember from './mutations/updateEntityMember';
import deleteEntityMember from './mutations/deleteEntityMember';

import entityMember from './queries/entityMember';
import entityMembers from './queries/entityMembers';

export default {
  Mutation: {
    createEntityMember,
    updateEntityMember,
    deleteEntityMember,
  },
  Query: {
    entityMember,
    entityMembers,
  },
};
