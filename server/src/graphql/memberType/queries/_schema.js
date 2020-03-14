export default `
extend type Query {
  memberType(id: ID!): MemberType
  memberTypes: [MemberType]
}
`;
