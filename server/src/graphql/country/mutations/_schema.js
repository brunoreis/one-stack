export default `
extend type Mutation {

  createCountry(
    input: CreateCountryInput!
  ): CreateCountryResult

  updateCountry(
    input: UpdateCountryInput!
  ): UpdateCountryResult

  deleteCountry(
    input: DeleteCountryInput!
  ): DeleteCountryResult

}

input CreateCountryInput {
  code: String!
  name: String!
}

input UpdateCountryInput {
  code: String!
  name: String!
}

input DeleteCountryInput {
  code: String!
}

type CreateCountryResult {
  country: Country
}

type UpdateCountryResult {
  country: Country
}

type DeleteCountryResult {
  count: Int
}
`;
