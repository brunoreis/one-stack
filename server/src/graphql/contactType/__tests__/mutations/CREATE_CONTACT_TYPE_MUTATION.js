import gql from 'graphql-tag';

export default gql`
mutation CreateContactType( $input: CreateContactTypeInput! ) {
  createContactType ( input: $input ) {
    contactType {
      name
      id
    }
  }
}
`;
