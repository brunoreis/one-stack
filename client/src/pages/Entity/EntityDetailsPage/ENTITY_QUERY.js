import gql from 'graphql-tag';

export default gql`
  query Entity($id: ID!) {
    entity(id: $id) {
      id
      name
      description
      latitude
      longitude
    }
  }
`;
