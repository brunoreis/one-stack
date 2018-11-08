import gql from 'graphql-tag';

export default gql`
  {
    loggedUser {
      id
      email
      gardener {
        name
        description
        picture
      }
    }
  }
`;
