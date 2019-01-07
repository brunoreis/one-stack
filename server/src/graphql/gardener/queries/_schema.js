export default `
extend type Query {
  gardener(id: ID!): Gardener
  gardenersConnection: QueryGardenersConnection
  user(id: ID!): User
  loggedUser: User
}

type QueryGardenersConnection {
  edges: [QueryGardenersEdge]
  totalCount: ID!
}

type QueryGardenersEdge {
  cursor: String!
  node: Gardener
}
`;
