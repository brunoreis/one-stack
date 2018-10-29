export default `
type QueryGardenersConnection {
  edges: [QueryGardenersEdge]
  totalCount: Int!
}

type QueryGardenersEdge {
  cursor: String!
  node: Gardener
}
`;
