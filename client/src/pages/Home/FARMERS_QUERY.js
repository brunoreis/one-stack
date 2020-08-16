import gql from 'graphql-tag';

export default gql`
  {
    entities {
      id
      latitude
      longitude
      name
      description
    }
  }
`;
