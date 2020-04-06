export default `
extend type Mutation {

  createEntityType(
    input: CreateEntityTypeInput!
  ): CreateEntityTypeResult

  updateEntityType(
    input: UpdateEntityTypeInput!
  ): UpdateEntityTypeResult

  deleteEntityType(
    input: DeleteEntityTypeInput!
  ): DeleteEntityTypeResult

}

input CreateEntityTypeInput {
  name: String!
}

input UpdateEntityTypeInput {
  id: ID!
  name: String!
}

input DeleteEntityTypeInput {
  id: ID!
}

type CreateEntityTypeResult {
  entityType: EntityType
}

type UpdateEntityTypeResult {
  entityType: EntityType
}

type DeleteEntityTypeResult {
  count: Int
}
`;
