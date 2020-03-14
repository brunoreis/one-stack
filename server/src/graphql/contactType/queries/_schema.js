export default `
extend type Query {
  contactType(id: ID!): ContactType
  contactTypes: [ContactType]
}
`;
