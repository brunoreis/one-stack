import gql from 'graphql-tag';

export default gql`
  mutation CreateEntity( $input: CreateEntityInput! ) {
    createEntity ( input: $input ) {
      entity {
        id
        name
        description
      }
    }
  }
`;
