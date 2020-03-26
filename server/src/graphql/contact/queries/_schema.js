export default `
extend type Query {
  contact(id: ID!): Contact
  contacts: [Contact]
}
`;
