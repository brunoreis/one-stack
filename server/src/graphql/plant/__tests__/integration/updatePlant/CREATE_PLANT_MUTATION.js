import gql from 'graphql-tag';

export default gql`
  mutation createPlant( $input: CreatePlantInput! ) {
    createPlant ( input: $input ) {
      plant {
        id
      }
    }
  }
`;
