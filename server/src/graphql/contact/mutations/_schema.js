export default `
extend type Mutation {

  createContact(
    input: CreateContactInput!
  ): CreateContactResult

  updateContact(
    input: UpdateContactInput!
  ): UpdateContactResult

  deleteContact(
    input: DeleteContactInput!
  ): DeleteContactResult

}

input CreateContactInput {
  name: String!
  entityId: Int
  main: Boolean
}

input UpdateContactInput {
  id: ID!
  name: String!
  entityId: Int
  main: Boolean
}

input DeleteContactInput {
  id: ID!
}

type CreateContactResult {
  contact: Contact
}

type UpdateContactResult {
  contact: Contact
}

type DeleteContactResult {
  count: Int
}
`;
