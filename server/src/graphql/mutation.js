const Mutation = `
type Mutation {
  login(email: String!, password: String!): AuthPayload
  createUser(name: String!, password: String!, email: String!): User
  deleteUser(id: Int!): Int
}
`;

export default Mutation;
