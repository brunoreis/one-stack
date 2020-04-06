export default `
type User {
  id: ID!
  email: String!
  password: String!
  resetPasswordToken: String
  resetPasswordExpires: String
  entityId: Int
}
`;
