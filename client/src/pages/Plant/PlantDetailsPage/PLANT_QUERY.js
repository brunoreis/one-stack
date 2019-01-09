import gql from 'graphql-tag';

export default gql`
  query Plant($id: ID!) {
    plant(id: $id) {
      bla
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
