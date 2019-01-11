import gql from 'graphql-tag';

export default gql`
  {
    loggedUser {
      id
      email
      gardener {
        id
        name
        description
        picture
      }
    }
  }
`;
