import test from 'tape';

import createTestClient from '../../../../../__tests__/integration/createTestClient';
import UPDATE_GARDENER_MUTATION from './UPDATE_GARDENER_MUTATION';

test('update gardener', async (t) => {
  const { mutate } = await createTestClient();

  const updateVariables = {
    input: {
      name: 'Updated',
      description: 'has been updated',
    },
  };

  const updateResult = await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });

  t.equals(
    updateResult.errors[0].extensions.code,
    'UNAUTHENTICATED',
    'should receive AuthenticationError when not logged in',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
