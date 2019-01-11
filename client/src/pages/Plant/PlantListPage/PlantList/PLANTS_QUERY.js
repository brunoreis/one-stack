import gql from 'graphql-tag';

export default gql`
  {
    plantsConnection {
      totalCount
      edges {
        cursor
        node {
          id
          name
          edibleParts
          picture
        }
      }
    }
  }
`;
