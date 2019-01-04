import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../__tests__/integration/createUserAndLogin';

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
  t.equal(createResult.errors, undefined, 'should not throw an error on create');
  t.true(!!createResult.data.createPlant.plant.id, 'should have an id assigned');
  const insertedId = createResult.data.createPlant.plant.id;

  clean();
  const updateVariables = {
    input: {
      id: parseInt(insertedId, 10),
      name: 'Banana',
      scientificName: 'Musa Paradisiaca',
      edibleParts: ['fruto', 'mangará', 'casca'],
    },
  };

  const updateResult = await mutate({
    mutation: UPDATE_PLANT_MUTATION,
    variables: updateVariables,
  });

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
  t.end();
  // test.onFinish(() => process.exit(0));
});
