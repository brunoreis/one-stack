export default `
extend type Mutation {

  createLink(
    input: CreateLinkInput!
  ): CreateLinkResult

  updateLink(
    input: UpdateLinkInput!
  ): UpdateLinkResult

  deleteLink(
    input: DeleteLinkInput!
  ): DeleteLinkResult

}

input CreateLinkInput {
  link: String!
  entityId: Int
  linkTypeId: Int
  main: Boolean
}

input UpdateLinkInput {
  id: ID!
  link: String!
  entityId: Int
  linkTypeId: Int
  main: Boolean
}

input DeleteLinkInput {
  id: ID!
}

type CreateLinkResult {
  link: Link
}

type UpdateLinkResult {
  link: Link
}

type DeleteLinkResult {
  count: Int
}
`;
