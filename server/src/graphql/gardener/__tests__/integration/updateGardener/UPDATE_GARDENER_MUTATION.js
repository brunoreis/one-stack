import gql from 'graphql-tag';

export default gql`
mutation UpdateGardener( $input: UpdateGardenerInput! ) {
  updateGardener ( input: $input ) {
    gardener {
      name
      description
    }
  }
}
`;
