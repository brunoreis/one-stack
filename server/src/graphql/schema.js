import plant from './plant/schema';
import gardener from './gardener/schema';
import garden from './garden/schema';
import recipe from './recipe/schema';

const Schema = `
schema {
  query: Query,
  mutation: Mutation
}
type Query {
  default: Int
}
type Mutation {
  default: Int
}
`;

export default [
  Schema,
  ...plant,
  ...gardener,
  ...garden,
  ...recipe,
];
