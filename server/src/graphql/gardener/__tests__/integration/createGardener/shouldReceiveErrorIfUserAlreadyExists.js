import test from 'tape';
import createTestClient from '../../../../../__tests__/integration/createTestClient';

import CREATE_USER_MUTATION from './CREATE_USER_MUTATION';

test('create gardener', async (t) => {
  const { mutate, clean } = await createTestClient();
  const randomEmail = `${Math.random()}@test.com`;
  const variables = {
    input: {
      email: randomEmail,
      password: 'password',
      name: 'Test User',
      description: 'testing gardener creation',
    },
  };

  await mutate({
    mutation: CREATE_USER_MUTATION,
    variables,
  });
  clean();

  const result = await mutate({
    mutation: CREATE_USER_MUTATION,
    variables,
  });

  t.ok(
    result.errors,
    'should receive an error if user already exists',
  );


  t.end();
  test.onFinish(() => process.exit(0));
});
