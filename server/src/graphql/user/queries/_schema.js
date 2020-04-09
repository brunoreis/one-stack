export default `
extend type Query {
  user(id: ID!): User
  users: [User]
  loggedUser: User
}
`;
