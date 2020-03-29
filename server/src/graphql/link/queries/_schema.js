export default `
extend type Query {
  link(id: ID!): Link
  links: [Link]
}
`;
