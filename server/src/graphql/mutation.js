const Mutation = `
type Mutation {
  createUser(password: String!, email: String!): User
  updateUser(
    id: Int!,
    email: String,
    resetPasswordToken: String,
    resetPasswordExpires: String
  ): User
  deleteUser(id: Int!): Int
  passwordForgot(email: String): Result,
  passwordReset(
    token: String!,
    password: String!
  ): Result
}
`;

export default Mutation;
