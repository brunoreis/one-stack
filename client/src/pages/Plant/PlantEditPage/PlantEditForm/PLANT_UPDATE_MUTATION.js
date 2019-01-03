import gql from 'graphql-tag';

export default gql`
  mutation UpdatePlant( $input: UpdatePlantInput! ) {
    updatePlant ( input: $input ) {
      plant {
        id
        name
        scientificName
        edibleParts
        tips
      }
    }
  }
`;
