import Query from './query';
import Mutation from './mutation';
import plant from './plant/schema';
import gardener from './gardener/schema';
import garden from './garden/schema';
import recipe from './recipe/schema';

const Schema = `
schema {
  query: Query,
  mutation: Mutation
}
`;

export default [
  Schema,
  Query,
  Mutation,
  ...plant,
  ...gardener,
  ...garden,
  ...recipe,
];
