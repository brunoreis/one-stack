import createLinkType from './mutations/createLinkType';
import updateLinkType from './mutations/updateLinkType';
import deleteLinkType from './mutations/deleteLinkType';

import linkType from './queries/linkType';
import linkTypes from './queries/linkTypes';

export default {
  Mutation: {
    createLinkType,
    updateLinkType,
    deleteLinkType,
  },
  Query: {
    linkType,
    linkTypes,
  },
};
