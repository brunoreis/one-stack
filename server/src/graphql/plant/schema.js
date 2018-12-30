import querySchema from './queries/_schema';
import mutationSchema from './mutations/_schema';

const types = `
type Plant {
  id: ID!
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
  createdAt: String!
  createdBy: Gardener!
}`;

export default [types, querySchema, mutationSchema];
