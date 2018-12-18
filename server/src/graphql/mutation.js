const Mutation = `
type Mutation {
  createUser(
    password: String!,
    email: String!,
    name: String!,
    description: String,
    picture: String,
  ): User
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
  updateGardener(
    name: String
    description: String
  ): Gardener
  createPlant(
    name: String!
    scientificName: String
    edibleParts: String
  ): Plant
  deletePlant(id: Int!): Int
}
`;

export default Mutation;
