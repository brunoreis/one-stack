import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/__integration__/createTestClient';

const DELETE_USER_MUTATION = gql`
  mutation DeleteUser( $input: DeleteUserInput! ) {
    deleteUser ( input: $input ) {
      count
    }
  }
`;

test('delete user', async (t) => {
  t.plan(2);
  const { mutate } = await createTestClient();

  const deleteResult = await mutate({
    mutation: DELETE_USER_MUTATION,
    variables: { input: { id: 1 } },
  });

  t.equal(deleteResult.errors, undefined, 'should not throw an error on delete');
  t.equal(deleteResult.data.deleteUser.count, 1, 'should return 1');
});
