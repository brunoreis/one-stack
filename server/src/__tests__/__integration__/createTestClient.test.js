import test from 'tape';
import { context } from '../../server';

import createTestClient from './createTestClient';

test('createTestClient', async (t) => {
  t.plan(1);
  await createTestClient();
  t.deepEqual(
    context.loggedUser,
    { id: 1, email: 'testUser@mock.com', gardener: { id: 1 } },
    'should inject a mock user with id and email to the context',
  );

  t.end();
});
