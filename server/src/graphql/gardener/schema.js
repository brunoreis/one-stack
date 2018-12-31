import querySchema from './queries/_schema';
import mutationSchema from './mutations/_schema';

const types = `
type User {
  id: ID!
  email: String!
  resetPasswordToken: String
  resetPasswordExpires: String
  gardener: Gardener!
}

type Gardener {
  id: ID!
  name: String!
  description: String
  picture: String
  gardensConnection: GardenerGardensConnection
  recipesConnection: GardenerRecipesConnection
}

type QueryGardenersConnection {
  edges: [QueryGardenersEdge]
  totalCount: Int!
}

type QueryGardenersEdge {
  cursor: String!
  node: Gardener
}

type GardenerRecipesConnection {
  totalCount: Int!
  edges: [GardenerRecipesEdge]
}

type GardenerRecipesEdge {
  cursor: String!
  node: Recipe
}

type GardenerGardensConnection {
  totalCount: Int!
  edges: [GardenerGardensEdge]
}

type GardenerGardensEdge {
  cursor: String!
  node: Garden
}
`;

export default [types, querySchema, mutationSchema];
