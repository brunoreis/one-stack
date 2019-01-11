export default `
type Plant {
  id: ID!
  name: String!
  scientificName: String
  edibleParts: [String]!
  tips: [String]
  picture: String
  createdAt: String!
  createdBy: Gardener!
}
`;
