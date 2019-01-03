import { mergeDeepLeft, compose } from 'ramda';

import plant from './plant/resolvers';
import gardener from './gardener/resolvers';

const mergedResolvers = compose(
  mergeDeepLeft(plant),
)(gardener);

export default mergedResolvers;
