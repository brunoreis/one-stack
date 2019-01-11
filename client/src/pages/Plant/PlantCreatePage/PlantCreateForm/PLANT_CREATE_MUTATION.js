import gql from 'graphql-tag';

export default gql`
  mutation CreatePlant( $input: CreatePlantInput! ) {
    createPlant ( input: $input ) {
      plant {
        id
        name
        scientificName
        edibleParts
        tips
        picture
      }
    }
  }
`;
