const Mutation = `
type Mutation {
  createUser(name: String!, password: String!, email: String!): User
  updateUser(
    id: Int!,
    name: String, 
    email: String,
    resetPasswordToken: String,
    resetPasswordExpires: String
  ): User
  deleteUser(id: Int!): Int
}
`;

export default Mutation;
