import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';
import linkType from './linkType/resolvers';
import memberType from './memberType/resolvers';
import country from './country/resolvers';
import entity from './entity/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
  mergeDeepLeft(linkType),
  mergeDeepLeft(memberType),
  mergeDeepLeft(country),
  mergeDeepLeft(entity),
)(entityType);

export default mergedResolvers;
