export default `
extend type Mutation {

  createEntity(
    input: CreateEntityInput!
  ): CreateEntityResult

  updateEntity(
    input: UpdateEntityInput!
  ): UpdateEntityResult

  deleteEntity(
    input: DeleteEntityInput!
  ): DeleteEntityResult

}

input CreateEntityInput {
  name: String!
  description: String 
  address: String
  addressComplement: String
  city: String
  region: String
  postCode: String
  longitude: Float
  latitude: Float
  entityTypeId: Int
  countryCode: String
}

input UpdateEntityInput {
  id: ID!
  name: String!
  description: String 
  address: String
  addressComplement: String
  city: String
  region: String
  postCode: String
  longitude: Float
  latitude: Float
  entityTypeId: Int
  countryCode: String
}

input DeleteEntityInput {
  id: ID!
}

type CreateEntityResult {
  entity: Entity
}

type UpdateEntityResult {
  entity: Entity
}

type DeleteEntityResult {
  count: Int
}
`;
