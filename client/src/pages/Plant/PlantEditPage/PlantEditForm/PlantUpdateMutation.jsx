import gql from 'graphql-tag';

export default gql`
  mutation Updatelant(
    $id: Int!
    $name: String
    $scientificName: String
    $edibleParts: [String]
    $tips: [String]
  ) {
    updatePlant (
      id: $id
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
