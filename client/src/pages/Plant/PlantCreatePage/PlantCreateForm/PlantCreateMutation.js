import gql from 'graphql-tag';

export default gql`
  mutation CreatePlant(
    $name: String!
    $scientificName: String
    $edibleParts: String
  ) {
    createPlant (
      name: $name
      scientificName: $scientificName
      edibleParts: $edibleParts
    ) {
      id
      name
      scientificName
      edibleParts
    }
  }
`;
