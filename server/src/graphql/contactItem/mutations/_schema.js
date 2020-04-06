export default `
extend type Mutation {

  createContactItem(
    input: CreateContactItemInput!
  ): CreateContactItemResult

  updateContactItem(
    input: UpdateContactItemInput!
  ): UpdateContactItemResult

  deleteContactItem(
    input: DeleteContactItemInput!
  ): DeleteContactItemResult

}

input CreateContactItemInput {
  contact: String!
  contactTypeId: Int
  contactId: Int
}

input UpdateContactItemInput {
  id: ID!
  contact: String!
  contactTypeId: Int
  contactId: Int
}

input DeleteContactItemInput {
  id: ID!
}

type CreateContactItemResult {
  contactItem: ContactItem
}

type UpdateContactItemResult {
  contactItem: ContactItem
}

type DeleteContactItemResult {
  count: Int
}
`;
