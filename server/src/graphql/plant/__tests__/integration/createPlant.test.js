import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';

import createTestClient from '../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../__tests__/integration/createUserAndLogin';

import db from '../../../../db';

const CREATE_PLANT_MUTATION = gql`
  mutation CreatePlant( $input: CreatePlantInput! ) {
    createPlant ( input: $input ) {
      plant {
        id
        name
        scientificName
        edibleParts
        tips
        createdBy {
          id
        }
      }
    }
  }
`;

test('create plant', async (t) => {
  await db('plant').del();
  
  const { mutate, clean } = await createTestClient();
  
  let variables = {
    input: {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
    },
  };

  let result = null;

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();

  t.equals(
    result.errors[0].extensions.code,
    'UNAUTHENTICATED',
    'should receive AuthenticationError when not logged in'
  );

  
  const loggedUser = await createUserAndLogin();

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();

  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    omit(['id'], result.data.createPlant.plant),
    {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
      tips: null,
      createdBy: {
        id: loggedUser.id.toString(),
      },
    },
    'should return the created plant and the correct gardener',
  );

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();

  t.ok(
    result.errors,
    'should receive an error when plant already exists',
  );

  variables.input.wrongField = "wrong";

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();


  t.ok(
    result.errors,
    'should receive an error when passing invalid fields',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
