export default `
type User {
  id: ID!
  name: String!
  email: String!
  resetPasswordToken: String
  resetPasswordExpires: String
}
`;
