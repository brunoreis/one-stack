export default `
extend type Query {
  plant(id: ID!): Plant
  plants: [Plant]
  plantsConnection: QueryPlantsConnection
}

type QueryPlantsConnection {
  edges: [QueryPlantsEdge]
  totalCount: ID!
}

type QueryPlantsEdge {
  cursor: String!
  node: Plant
}
`;
