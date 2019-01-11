import gql from 'graphql-tag';

export default gql`
  query Plant($id: ID!) {
    plant(id: $id) {
      id
      name
      scientificName
      edibleParts
      tips
      picture
      createdAt
      createdBy {
        name
      }
    }
  }
`;
