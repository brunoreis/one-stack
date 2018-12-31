export default `
extend type Query {
  gardener(id: Int!): Gardener
  gardenersConnection: QueryGardenersConnection
  user(id: Int!): User
  loggedUser: User
}
`;
