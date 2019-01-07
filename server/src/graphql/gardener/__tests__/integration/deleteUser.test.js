import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/integration/createTestClient';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser( $input: CreateUserInput! ) {
    createUser ( input: $input ) {
      user {
        id
      }
    }
  }
`;

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser( $input: DeleteUserInput! ) {
    deleteUser ( input: $input ) {
      count
    }
  }
`;

test('delete user', async (t) => {
  const { mutate, clean } = await createTestClient();

  const createResult = await mutate({
    mutation: CREATE_USER_MUTATION,
    variables: {
      input: { 
        email: `${Math.random()}@test.com`,
        password: 'password',
        name: 'Test User',
        description: 'testing gardener delete',
      },
    },
  });
  clean();
  const deleteResult = await mutate({
    mutation: DELETE_USER_MUTATION,
    variables: {
      input: {
        id: createResult.data.createUser.user.id
      }
    },
  });

  t.equal(deleteResult.errors, undefined, 'should not throw an error on delete');
  t.equal(deleteResult.data.deleteUser.count, 1, 'should return 1');
  
  t.end();
  test.onFinish(() => process.exit(0));
});
