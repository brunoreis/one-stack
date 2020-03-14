import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';
import linkType from './linkType/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
  mergeDeepLeft(linkType),
)(entityType);

export default mergedResolvers;
