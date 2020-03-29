export default `
extend type Mutation {

  createEntityMember(
    input: CreateEntityMemberInput!
  ): CreateEntityMemberResult

  updateEntityMember(
    input: UpdateEntityMemberInput!
  ): UpdateEntityMemberResult

  deleteEntityMember(
    input: DeleteEntityMemberInput!
  ): DeleteEntityMemberResult

}

input CreateEntityMemberInput {
  entityIdMember: Int!
  entityId: Int
  memberTypeId: Int
  main: Boolean
}

input UpdateEntityMemberInput {
  id: ID!
  entityIdMember: Int!
  entityId: Int
  memberTypeId: Int
  main: Boolean
}

input DeleteEntityMemberInput {
  id: ID!
}

type CreateEntityMemberResult {
  entityMember: EntityMember
}

type UpdateEntityMemberResult {
  entityMember: EntityMember
}

type DeleteEntityMemberResult {
  count: Int
}
`;
