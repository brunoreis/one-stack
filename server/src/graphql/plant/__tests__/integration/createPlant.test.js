import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';

import createTestClient from '../../../../__tests__/integration/createTestClient';
import login from '../../../../__tests__/integration/login';

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
  const { mutate } = await createTestClient();
  
  const variables = {
    input: {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
    },
  };

  t.throws(
    mutate,
    'should throw error when not logged in'
  );
  
  const loggedUser = await login();

  const result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });

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
  t.end();
  // test.onFinish(() => process.exit(0));
});
