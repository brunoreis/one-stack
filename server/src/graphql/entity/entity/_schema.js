export default `
type Entity {
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
`;
