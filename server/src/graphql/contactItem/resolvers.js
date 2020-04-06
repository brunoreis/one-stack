import createContactItem from './mutations/createContactItem';
import updateContactItem from './mutations/updateContactItem';
import deleteContactItem from './mutations/deleteContactItem';

import contactItem from './queries/contactItem';
import contactItens from './queries/contactItens';

export default {
  Mutation: {
    createContactItem,
    updateContactItem,
    deleteContactItem,
  },
  Query: {
    contactItem,
    contactItens,
  },
};
