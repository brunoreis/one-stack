export default `
extend type Query {
  contactItem(id: ID!): ContactItem
  contactItems: [ContactItem]
}
`;
