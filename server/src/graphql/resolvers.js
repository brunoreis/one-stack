import { mergeDeepRight } from 'ramda';
import Query from './resolvers/query';
import Mutation from './resolvers/mutation';
import Types from './resolvers/types';
import plant from './plant/resolvers';


const resolvers = {
  Query,
  Mutation,
  ...Types,
};

const mergedResolvers = mergeDeepRight(resolvers, plant);
export default mergedResolvers;
