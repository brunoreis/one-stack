const Mutation = `
type Mutation {
  createUser(name: String!, password: String!, email: String!): User
  deleteUser(id: Int!): Int
}
`;

export default Mutation;
