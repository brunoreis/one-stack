import gql from 'graphql-tag';

export default gql`
  mutation CreateUser(
    $password: String!
    $email: String!
    $name: String!
    $description: String
  ) {
    createUser (
      password: $password
      email: $email
      name: $name
      description: $description
    ) {
      id
      email
      gardener {
        id
        name
      }
    }
  }
`;
