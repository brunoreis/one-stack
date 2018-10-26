export default `
type Gardener {
  id: ID!
  name: String!
  description: String
  picture: String
  gardensConnection: GardenerGardensConnection
  recipesConnection: GardenerRecipesConnection
}

type GardenerRecipesConnection {
  pageInfo: PageInfo!
  totalCount: Int!
  edges: [GardenerRecipesEdge]
}

type GardenerRecipesEdge {
  cursor: String!
  node: Recipe
}

type GardenerGardensConnection {
  pageInfo: PageInfo!
  totalCount: Int!
  edges: [GardenerGardensEdge]
}

type GardenerGardensEdge {
  cursor: String!
  node: Garden
}
`;
