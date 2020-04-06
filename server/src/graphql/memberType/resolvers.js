import createMemberType from './mutations/createMemberType';
import updateMemberType from './mutations/updateMemberType';
import deleteMemberType from './mutations/deleteMemberType';

import memberType from './queries/memberType';
import memberTypes from './queries/memberTypes';

export default {
  Mutation: {
    createMemberType,
    updateMemberType,
    deleteMemberType,
  },
  Query: {
    memberType,
    memberTypes,
  },
};
