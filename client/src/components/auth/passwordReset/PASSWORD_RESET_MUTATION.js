import gql from 'graphql-tag';

export default gql`
  mutation PasswordReset( $input: PasswordResetInput!) {
    passwordReset ( input: $input ) {
      
      message,
      success
    }
  }
`;
