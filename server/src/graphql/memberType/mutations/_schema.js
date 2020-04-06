export default `
extend type Mutation {

  createMemberType(
    input: CreateMemberTypeInput!
  ): CreateMemberTypeResult

  updateMemberType(
    input: UpdateMemberTypeInput!
  ): UpdateMemberTypeResult

  deleteMemberType(
    input: DeleteMemberTypeInput!
  ): DeleteMemberTypeResult

}

input CreateMemberTypeInput {
  name: String!
}

input UpdateMemberTypeInput {
  id: ID!
  name: String!
}

input DeleteMemberTypeInput {
  id: ID!
}

type CreateMemberTypeResult {
  memberType: MemberType
}

type UpdateMemberTypeResult {
  memberType: MemberType
}

type DeleteMemberTypeResult {
  count: Int
}
`;
