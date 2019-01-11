export default `
extend type Mutation {

  createPlant(
    input: CreatePlantInput!
  ): CreatePlantResult

  updatePlant(
    input: UpdatePlantInput!
  ): UpdatePlantResult

  deletePlant(
    input: DeletePlantInput!
  ): DeletePlantResult

}

input CreatePlantInput {
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
  picture: String
}

input UpdatePlantInput {
  id: ID!
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
  picture: String
}

input DeletePlantInput {
  id: ID!
}

type CreatePlantResult {
  plant: Plant
}

type UpdatePlantResult {
  plant: Plant
}

type DeletePlantResult {
  count: Int
}
`;
