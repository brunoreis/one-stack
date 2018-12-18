import gql from 'graphql-tag';

export default gql`
  mutation CreatePlant(
    $name: String!
    $scientificName: String
    $edibleParts: [String]
    $tips: [String]
  ) {
    createPlant (
      name: $name
      scientificName: $scientificName
      edibleParts: $edibleParts
      tips: $tips
    ) {
      id
      name
      scientificName
      edibleParts
      tips
    }
  }
`;
