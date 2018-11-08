import gql from 'graphql-tag';

export default gql`
  {
    gardenersConnection {
      totalCount
      edges {
        cursor
        node {
          id
          name
          description
          gardensConnection {
            edges {
              node {
                id
                name
              }
            }
          }
          recipesConnection {
            totalCount
          }
        }
      }
    }
  }
`;
