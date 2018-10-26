import gql from 'graphql-tag';

export default gql`
  {
    gardeners {
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
`;
