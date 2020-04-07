import createContactItem from './mutations/createContactItem';
import updateContactItem from './mutations/updateContactItem';
import deleteContactItem from './mutations/deleteContactItem';

import contactItem from './queries/contactItem';
import contactItems from './queries/contactItems';

export default {
  Mutation: {
    createContactItem,
    updateContactItem,
    deleteContactItem,
  },
  Query: {
    contactItem,
    contactItems,
  },
};
