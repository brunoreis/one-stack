import gql from 'graphql-tag';

export default gql`
  mutation PasswordForgot( $input: PasswordForgotInput! ) {
    passwordForgot ( input: $input ) {
      message,
      success
    }
  }
`;
