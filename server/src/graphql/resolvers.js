import { mergeDeepLeft, compose } from 'ramda';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Types from './resolvers/types';
import plant from './plant/resolvers';
import gardener from './gardener/resolvers';

const resolvers = {
  Query,
  Mutation,
  ...Types,
};

const mergedResolvers = compose(
  mergeDeepLeft(plant),
  mergeDeepLeft(gardener),
  // mergeDeepLeft(user), .... add more resolvers like this
)(resolvers);

export default mergedResolvers;
