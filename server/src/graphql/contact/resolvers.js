import createContact from './mutations/createContact';
import updateContact from './mutations/updateContact';
import deleteContact from './mutations/deleteContact';

import contact from './queries/contact';
import contacts from './queries/contacts';

export default {
  Mutation: {
    createContact,
    updateContact,
    deleteContact,
  },
  Query: {
    contact,
    contacts,
  },
};
