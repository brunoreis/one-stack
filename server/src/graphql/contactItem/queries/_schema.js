export default `
extend type Query {
  contactItem(id: ID!): ContactItem
  contactItens: [ContactItem]
}
`;
