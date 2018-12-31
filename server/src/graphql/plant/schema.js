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
}

type QueryPlantsConnection {
  edges: [QueryPlantsEdge]
  totalCount: Int!
}

type QueryPlantsEdge {
  cursor: String!
  node: Plant
}
`;

export default [types, querySchema, mutationSchema];
