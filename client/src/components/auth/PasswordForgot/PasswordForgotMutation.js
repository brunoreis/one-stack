import gql from 'graphql-tag';

export default gql`
  mutation PasswordForgot($email: String!) {
    passwordForgot (
        email: $email
    ) {
      message,
      success
    }
  }
`;
