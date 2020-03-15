import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';
import linkType from './linkType/resolvers';
import memberType from './memberType/resolvers';
import country from './country/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
  mergeDeepLeft(linkType),
  mergeDeepLeft(memberType),
  mergeDeepLeft(country),
)(entityType);

export default mergedResolvers;
