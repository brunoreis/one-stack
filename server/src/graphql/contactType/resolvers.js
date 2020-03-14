import createContactType from './mutations/createContactType';
import updateContactType from './mutations/updateContactType';
import deleteContactType from './mutations/deleteContactType';

import contactType from './queries/contactType';
import contactTypes from './queries/contactTypes';

export default {
  Mutation: {
    createContactType,
    updateContactType,
    deleteContactType,
  },
  Query: {
    contactType,
    contactTypes,
  },
};
