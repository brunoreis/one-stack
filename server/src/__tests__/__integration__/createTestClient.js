import gql from 'graphql-tag';
import { createTestClient } from 'apollo-server-testing';
import { server, context } from '../../server';
import db from '../../db/db';
import _dataSources from '../../dataSources';

const dataSources = _dataSources({ db })();

const CREATE_USER = gql`
  mutation CreateUser( $input: CreateUserInput! ) {
    createUser ( input: $input ) {
      user {
        email
      }
    }
  }
`;

let memoizedTestClient = null;
const clean = () => delete context.dataSources;

export default async () => {
  if (memoizedTestClient) {
    clean();
    return memoizedTestClient;
  }
  // this might need to be optimized later to avoid doing this heavy operation everytime
  await db('user').del();
  await db('plant').del();
  await db('gardener').del();
  await db.raw('ALTER SEQUENCE user_id_seq RESTART WITH 1');
  await db.raw('ALTER SEQUENCE gardener_id_seq RESTART WITH 1');
  try {
    const testClient = createTestClient(server);
    const { mutate } = testClient;

    // this might need to be optimized later to avoid calling a big mutation everytime

    const result = await mutate({
      mutation: CREATE_USER,
      variables: {
        input: {
          email: 'testUser@mock.com',
          password: 'secret',
          name: 'Mock Dude',
          description: 'Used on automated tests',
        }
      },
    });

    const user = await dataSources.user.getByEmail({
      email: result.data.createUser.user.email,
    });

    const {
      id,
      email,
      gardener,
    } = user;

    context.loggedUser = {
      id,
      email,
      gardener,
    };

    clean();
    delete context.dataSources;
    memoizedTestClient = {
      ...testClient,
      clean,
    };

    return memoizedTestClient;
  } catch (error) {
    console.log('Error:', { error });
  }
  return null;
};
