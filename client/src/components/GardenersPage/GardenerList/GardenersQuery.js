import gql from 'graphql-tag';

export default gql`
  {
    gardeners {
      id
      name
      description
      gardens {
        id
        name
      }
      recipesConnection {
        totalCount
      }
    }
  }
`;
