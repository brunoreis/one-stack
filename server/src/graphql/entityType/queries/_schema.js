export default `
extend type Query {
  entityType(id: ID!): EntityType
  entityTypes: [EntityType]
}
`;
