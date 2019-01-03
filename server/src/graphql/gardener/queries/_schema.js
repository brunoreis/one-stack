export default `
extend type Query {
  gardener(id: Int!): Gardener
  gardenersConnection: QueryGardenersConnection
  user(id: Int!): User
  loggedUser: User
}

type QueryGardenersConnection {
  edges: [QueryGardenersEdge]
  totalCount: Int!
}

type QueryGardenersEdge {
  cursor: String!
  node: Gardener
}
`;
