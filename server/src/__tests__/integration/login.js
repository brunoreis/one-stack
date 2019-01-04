import gql from 'graphql-tag';

import db from '../../db';
import _dataSources from '../../dataSources';
import { context } from '../../server';
import createTestClient from './createTestClient';

const dataSources = _dataSources({ db })();

const CREATE_USER = gql`
  mutation CreateUser( $input: CreateUserInput! ) {
    createUser ( input: $input ) {
      user {
        id
      }
    }
  }
`;

export default async () => {
  const { mutate, clean } = await createTestClient();

  const result = await mutate({
    mutation: CREATE_USER,
    variables: {
      input: {
        email: `${Math.random()}@mock.com`,
        password: 'secret',
        name: 'Mock Dude',
        description: 'Used on automated tests',
      }
    },
  });

  const user = await dataSources.user.getById({
    id: result.data.createUser.user.id,
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

  return context.loggedUser;
};
