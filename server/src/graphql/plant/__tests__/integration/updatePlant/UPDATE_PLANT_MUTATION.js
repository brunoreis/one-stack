import gql from 'graphql-tag';

export default gql`
  mutation updatePlant( $input: UpdatePlantInput! ) {
    updatePlant ( input: $input ) {
      plant {
        id
        name
        scientificName
        edibleParts
        tips
        createdBy {
          name
        }
      }
    }
  }
`;
