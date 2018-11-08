export default `
type User {
  id: ID!
  email: String!
  resetPasswordToken: String
  resetPasswordExpires: String
  gardener: Gardener!
}
`;
