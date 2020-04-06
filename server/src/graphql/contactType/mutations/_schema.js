export default `
extend type Mutation {

  createContactType(
    input: CreateContactTypeInput!
  ): CreateContactTypeResult

  updateContactType(
    input: UpdateContactTypeInput!
  ): UpdateContactTypeResult

  deleteContactType(
    input: DeleteContactTypeInput!
  ): DeleteContactTypeResult

}

input CreateContactTypeInput {
  name: String!
}

input UpdateContactTypeInput {
  id: ID!
  name: String!
}

input DeleteContactTypeInput {
  id: ID!
}

type CreateContactTypeResult {
  contactType: ContactType
}

type UpdateContactTypeResult {
  contactType: ContactType
}

type DeleteContactTypeResult {
  count: Int
}
`;
