import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';
import createTestClient from '../../../../__tests__/__integration__/createTestClient';

const CREATE_USER_MUTATION = gql`
  mutation CreateUser( $input: CreateUserInput! ) {
    createUser ( input: $input ) {
      user {
        id
        email
        gardener {
          id
          name
        }
      }
    }
  }
`;

test('create gardener', async (t) => {
  console.log('entrou no teste 1');
  t.plan(2);
  const { mutate } = await createTestClient();
  const variables = {
    input: {
      email: 'test@test.com',
      password: 'password',
      name: 'Test User',
      description: 'testing gardener creation',
    },
  };

  const result = await mutate({
    mutation: CREATE_USER_MUTATION,
    variables,
  });
  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    omit(['id'], result.data.createUser.user),
    {
      email: 'test@test.com',
      password: 'password',
      gardener: {
        name: 'Test User',
        description: 'testing gardener creation',
      },
    },
    'should return the created user',
  );
});
