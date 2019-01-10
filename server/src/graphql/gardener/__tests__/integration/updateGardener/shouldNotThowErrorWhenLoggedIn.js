import test from 'tape';

import createTestClient from '../../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../../__tests__/integration/createUserAndLogin';

import UPDATE_GARDENER_MUTATION from './UPDATE_GARDENER_MUTATION';

test('update gardener', async (t) => {
  const { mutate } = await createTestClient();

  const updateVariables = {
    input: {
      name: 'Updated',
      description: 'has been updated',
    },
  };

  await createUserAndLogin();

  const updateResult = await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });

  t.equal(
    updateResult.errors,
    undefined,
    'should not throw an error after login',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
