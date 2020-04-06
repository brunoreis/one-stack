export default `
extend type Query {
  entity(id: ID!): Entity
  entities: [Entity]
}
`;
