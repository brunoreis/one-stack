export default `
extend type Query {
  country(code: String!): Country
  countries: [Country]
}
`;
