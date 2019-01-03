export default `
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
