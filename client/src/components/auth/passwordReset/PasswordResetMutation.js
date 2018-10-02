import gql from 'graphql-tag';

export default gql`
  mutation PasswordReset(
    $token: String!,
    $password: String!) {
    passwordReset (
        token: $token,
        password: $password
    ) {
      message,
      success
    }
  }
`;
