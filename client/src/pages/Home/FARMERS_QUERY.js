import gql from 'graphql-tag';

export default gql`
  {
    entities {
      latitude
      longitude
      name
      description
    }
  }
`;
