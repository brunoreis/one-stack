import { mergeDeepLeft, compose } from 'ramda';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Types from './resolvers/types';
import plant from './plant/resolvers';


const resolvers = {
  Query,
  Mutation,
  ...Types,
};

const mergedResolvers = compose(
  mergeDeepLeft(plant),
  // mergeDeepLeft(user), .... add more resolvers like this
)(resolvers);

export default mergedResolvers;
