import gql from 'graphql-tag';
import { createTestClient } from 'apollo-server-testing';
import { server, context } from '../../server';
import db from '../../db/db';
import data from '../../data';

const CREATE_USER = gql`
  mutation CreateUser(
    $password: String!
    $email: String!
    $name: String!
    $description: String
  ) {
    createUser (
      password: $password
      email: $email
      name: $name
      description: $description
    ) {
      email
    }
  }
`;

export default async () => {
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
        password: 'secret',
        email: 'testUser@mock.com',
        name: 'Mock Dude',
        description: 'Used on automated tests',
      },
    });

    const user = await data.user.getByEmail(result.data.createUser.email);

    const {
      id,
      email,
    } = user;

    context.loggedUser = {
      id,
      email,
      gardener: {
        id: user.gardener,
      },
    };

    delete context.dataSources;

    return testClient;
  } catch (error) {
    console.log('Error:', { error });
  }
};
