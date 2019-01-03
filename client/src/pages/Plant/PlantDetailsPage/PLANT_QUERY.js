import gql from 'graphql-tag';

export default gql`
  query Plant($id: Int!) {
    plant(id: $id) {
      id
      name
      scientificName
      edibleParts
      tips
      createdAt
      createdBy {
        name
      }
    }
  }
`;
