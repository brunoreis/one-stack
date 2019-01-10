import test from 'tape';
import createTestClient from '../../../../../__tests__/integration/createTestClient';

import CREATE_USER_MUTATION from './CREATE_USER_MUTATION';
import DELETE_USER_MUTATION from './DELETE_USER_MUTATION';

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
        id: createResult.data.createUser.user.id,
      },
    },
  });

  t.equal(deleteResult.data.deleteUser.count, 1, 'should return 1');

  t.end();
  test.onFinish(() => process.exit(0));
});
