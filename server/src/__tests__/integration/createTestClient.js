import { createTestClient } from 'apollo-server-testing';
import { server, context } from '../../server';
import _dataSources from '../../dataSources';

let memoizedTestClient = null;
const clean = () => delete context.dataSources;

export default async () => {
  if (memoizedTestClient) {
    clean();
    context.loggedUser = null;
    return memoizedTestClient;
  }
  // this might need to be optimized later to avoid doing this heavy operation everytime
  // await db('user').del();
  // await db('plant').del();
  // await db('gardener').del();
  // await db.raw('ALTER SEQUENCE user_id_seq RESTART WITH 1');
  // await db.raw('ALTER SEQUENCE gardener_id_seq RESTART WITH 1');
  try {
    const testClient = createTestClient(server);
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
