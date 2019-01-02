export default `
extend type Mutation {

  createPlant(
    input: CreatePlantInput!
  ): CreatePlantResult

  updatePlant(
    input: UpdatePlantInput!
  ): UpdatePlantResult

  deletePlant(
    id: Int!
  ): Int

}

type CreatePlantResult {
  plant: Plant
}

type UpdatePlantResult {
  plant: Plant
}

input CreatePlantInput {
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
}

input UpdatePlantInput {
  id: Int!
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
}
`;
