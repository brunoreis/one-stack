export default `
extend type Query {
  linkType(id: ID!): LinkType
  linkTypes: [LinkType]
}
`;
