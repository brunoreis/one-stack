import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';

import createTestClient from '../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../__tests__/integration/createUserAndLogin';

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
  const { mutate, clean } = await createTestClient();
  
  const variables = {
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

  t.equals(
    result.errors[0].extensions.code,
    'UNAUTHENTICATED',
    'should receive AuthenticationError when not logged in'
  );

  clean();
  
  const loggedUser = await createUserAndLogin();

  result = await mutate({
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
