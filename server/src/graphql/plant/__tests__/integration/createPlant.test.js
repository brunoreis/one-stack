import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';
import createTestClient from '../../../../__tests__/__integration__/createTestClient';

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
          name
        }
      }
    }
  }
`;

test('create plant', async (t) => {
  t.plan(2);
  const { mutate } = await createTestClient();
  const variables = {
    input: {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
    },
  };

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
        name: 'Mock Dude',
      },
    },
    'should return the created plant and the correct gardener',
  );
});
