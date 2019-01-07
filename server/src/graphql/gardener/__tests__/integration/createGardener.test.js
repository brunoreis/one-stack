import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';
import createTestClient from '../../../../__tests__/integration/createTestClient';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser( $input: CreateUserInput! ) {
    createUser ( input: $input ) {
      user {
        email
        gardener {
          name
          description
        }
      }
    }
  }
`;

test('create gardener', async (t) => {
  const { mutate, clean } = await createTestClient();
  const randomEmail = `${Math.random()}@test.com`
  const variables = {
    input: {
      email: randomEmail,
      password: 'password',
      name: 'Test User',
      description: 'testing gardener creation',
    },
  };

  let result = await mutate({
    mutation: CREATE_USER_MUTATION,
    variables,
  });
  clean();

  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    omit(['id'], result.data.createUser.user),
    {
      email: randomEmail,
      gardener: {
        name: 'Test User',
        description: 'testing gardener creation',
      },
    },
    'should return the created user',
  );

  result = await mutate({
    mutation: CREATE_USER_MUTATION,
    variables,
  });
  clean();

  t.ok(
    result.errors,
    'should receive an error if user already exists',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
