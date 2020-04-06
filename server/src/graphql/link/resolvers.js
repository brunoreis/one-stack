import createLink from './mutations/createLink';
import updateLink from './mutations/updateLink';
import deleteLink from './mutations/deleteLink';

import link from './queries/link';
import links from './queries/links';

export default {
  Mutation: {
    createLink,
    updateLink,
    deleteLink,
  },
  Query: {
    link,
    links,
  },
};
