export default `
type Plant {
  id: ID!
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
  createdAt: String!
  createdBy: Gardener!
}

extend type Mutation {
  createPlant(
    name: String!
    scientificName: String
    edibleParts: [String]!
    tips: [String]
  ): Plant
  updatePlant(
    id: Int!
    name: String
    scientificName: String
    edibleParts: [String]!
    tips: [String]
  ): Plant
  deletePlant(id: Int!): Int
}

extend type Query {
  plant(id: Int!): Plant
  plants: [Plant]
  plantsConnection: QueryPlantsConnection
}



`;
