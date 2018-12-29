import test from 'tape';
import createTestClient from './createTestClient';
import CREATE_USER from './CREATE_USER';

test('create user', async (t) => {
  const { mutate } = await createTestClient();

  t.plan(2);

  const result = await mutate({
    mutation: CREATE_USER,
    variables: {
      password: 'secret',
      email: 'testUser@mock.com',
      name: 'Mock Dude',
      description: 'Used on automated tests',
    },
  });

  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    result.data,
    {
      createUser: {
        id: '1',
        email: 'testUser@mock.com',
        gardener: {
          id: '1',
          name: 'Mock Dude',
        },
      },
    },
    'should return user and gardener data',
  );
  t.end();
});
