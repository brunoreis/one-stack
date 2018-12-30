export default `
extend type Query {
  plant(id: Int!): Plant
  plants: [Plant]
  plantsConnection: QueryPlantsConnection
}
`;
