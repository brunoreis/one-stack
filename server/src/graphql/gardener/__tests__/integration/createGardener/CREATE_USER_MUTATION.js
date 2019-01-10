import gql from 'graphql-tag';

export default gql`
mutation CreateUser( $input: CreateUserInput! ) {
  createUser ( input: $input ) {
    user {
      email
      gardener {
        name
        description
      }
    }
  }
}
`;
