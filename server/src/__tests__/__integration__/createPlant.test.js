import test from 'tape';
import gql from 'graphql-tag';
import { omit } from 'ramda';
import createTestClient from './createTestClient';

const CREATE_PLANT_MUTATION = gql`
  mutation CreatePlant(
    $name: String!
    $scientificName: String
    $edibleParts: [String]!
    $tips: [String]
  ) {
    createPlant (
      name: $name
      scientificName: $scientificName
      edibleParts: $edibleParts
      tips: $tips
    ) {
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
`;

test('create plant', async (t) => {
  t.plan(2);
  const { mutate } = await createTestClient();
  const variables = {
    name: 'banana',
    scientificName: 'musa paradisiaca',
    edibleParts: ['fruto', 'mangará'],
  };

  const result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    omit(['id'], result.data.createPlant),
    {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
      tips: null,
      createdBy: {
        name: 'Mock Dude',
      },
    },
    'should return plant and gardener data',
  );
});
