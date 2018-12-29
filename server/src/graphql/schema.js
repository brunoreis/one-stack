import Query from './query';
import Mutation from './mutation';
import Types from './types';
import plant from './plant/schema';

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
  ...Types,
  plant,
];
