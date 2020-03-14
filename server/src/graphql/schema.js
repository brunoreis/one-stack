import entityType from './entityType/schema';
import contactType from './contactType/schema';

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
  ...entityType,
  ...contactType,
];
