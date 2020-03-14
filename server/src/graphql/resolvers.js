import { mergeDeepLeft, compose } from 'ramda';

import entityType from './entityType/resolvers';
import contactType from './contactType/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(contactType),
)(entityType);

export default mergedResolvers;
