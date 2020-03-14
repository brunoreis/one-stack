import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';
import linkType from './linkType/resolvers';
import memberType from './memberType/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
  mergeDeepLeft(linkType),
  mergeDeepLeft(memberType),
)(entityType);

export default mergedResolvers;
