export default `
extend type Query {
  entityMember(id: ID!): EntityMember
  entityMembers: [EntityMember]
}
`;
