export default `
type Gardener {
  id: ID!
  name: String!
  description: String
  picture: String
  gardens: [Garden]
  recipes: [Recipe]
}`;
