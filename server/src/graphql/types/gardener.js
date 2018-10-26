export default `
type Gardener {
  id: ID!
  name: String!
  description: String
  picture: String
  gardens: [Garden]
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
`;
