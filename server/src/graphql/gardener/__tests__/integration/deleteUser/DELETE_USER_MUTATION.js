import gql from 'graphql-tag';

export default gql`
mutation DeleteUser( $input: DeleteUserInput! ) {
  deleteUser ( input: $input ) {
    count
  }
}
`;
