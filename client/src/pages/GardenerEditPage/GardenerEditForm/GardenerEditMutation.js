import gql from 'graphql-tag';

export default gql`
  mutation UpdateGardener(
    $name: String
    $description: String
  ) {
    updateGardener (
      name: $name
      description: $description
    ) {
      id
      name
      description
    }
  }
`;
