import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../__tests__/integration/createUserAndLogin';

import db from '../../../../db';

const CREATE_PLANT_MUTATION = gql`
  mutation createPlant( $input: CreatePlantInput! ) {
    createPlant ( input: $input ) {
      plant {
        id
      }
    }
  }
`;

const UPDATE_PLANT_MUTATION = gql`
  mutation updatePlant( $input: UpdatePlantInput! ) {
    updatePlant ( input: $input ) {
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

test('update plant', async (t) => {
  await db('plant').del();

  const { mutate, clean } = await createTestClient();
  const loggedUser = await createUserAndLogin();

  const createVariables = {
    input: {
      name: 'banana',
      scientificName: 'musa paradisiaca',
      edibleParts: ['fruto', 'mangará'],
    },
  };
  const createResult = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables: createVariables,
  });
  clean();

  t.equal(createResult.errors, undefined, 'should not throw an error on create');
  t.true(!!createResult.data.createPlant.plant.id, 'should have an id assigned');

  const insertedId = createResult.data.createPlant.plant.id;

  let updateVariables = {
    input: {
      id: parseInt(insertedId, 10),
      name: 'Banana',
      scientificName: 'Musa Paradisiaca',
      edibleParts: ['fruto', 'mangará', 'casca'],
    },
  };

  let updateResult = await mutate({
    mutation: UPDATE_PLANT_MUTATION,
    variables: updateVariables,
  });
  clean();

  t.equal(updateResult.errors, undefined, 'should not throw an error on update');

  t.deepEqual(
    updateResult.data.updatePlant.plant,
    {
      id: insertedId,
      name: 'Banana',
      scientificName: 'Musa Paradisiaca',
      edibleParts: ['fruto', 'mangará', 'casca'],
      tips: null,
      createdBy: {
        name: 'Mock Dude',
      },
    },
    'should return the updated plant',
  );

  updateVariables.input.name = null;
  
  updateResult = await mutate({
    mutation: UPDATE_PLANT_MUTATION,
    variables: updateVariables,
  });
  clean();

  t.ok(
    updateResult.errors,
    'should receive an error when passing invalid fields',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
