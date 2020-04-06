export default `
extend type Mutation {

  createLinkType(
    input: CreateLinkTypeInput!
  ): CreateLinkTypeResult

  updateLinkType(
    input: UpdateLinkTypeInput!
  ): UpdateLinkTypeResult

  deleteLinkType(
    input: DeleteLinkTypeInput!
  ): DeleteLinkTypeResult

}

input CreateLinkTypeInput {
  name: String!
}

input UpdateLinkTypeInput {
  id: ID!
  name: String!
}

input DeleteLinkTypeInput {
  id: ID!
}

type CreateLinkTypeResult {
  linkType: LinkType
}

type UpdateLinkTypeResult {
  linkType: LinkType
}

type DeleteLinkTypeResult {
  count: Int
}
`;
