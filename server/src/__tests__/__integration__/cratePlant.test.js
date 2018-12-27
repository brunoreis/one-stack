import test from 'tape';
import { createTestClient } from 'apollo-server-testing';
import gql from 'graphql-tag';
import { server } from '../../server';

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
    }
  }
`;


const { mutate } = createTestClient(server);

test('create plant', async (t) => {
  t.plan(1);

  const variables = {
    name: 'banana',
    scientificName: 'musa paradisiaca',
    edibleParts: ['fruto', 'mangará'],
  };

  const result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });

  console.log('result', result);
});
