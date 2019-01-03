export default `
extend type Query {
  plant(id: Int!): Plant
  plants: [Plant]
  plantsConnection: QueryPlantsConnection
}

type QueryPlantsConnection {
  edges: [QueryPlantsEdge]
  totalCount: Int!
}

type QueryPlantsEdge {
  cursor: String!
  node: Plant
}
`;
