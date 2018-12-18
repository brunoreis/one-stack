export default `
type QueryPlantsConnection {
  edges: [QueryPlantsEdge]
  totalCount: Int!
}

type QueryPlantsEdge {
  cursor: String!
  node: Plant
}
`;
