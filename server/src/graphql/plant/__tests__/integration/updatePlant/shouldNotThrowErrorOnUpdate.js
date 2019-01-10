import test from 'tape';

import createTestClient from '../../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../../__tests__/integration/createUserAndLogin';

import CREATE_PLANT_MUTATION from './CREATE_PLANT_MUTATION';
import UPDATE_PLANT_MUTATION from './UPDATE_PLANT_MUTATION';

test('update plant', async (t) => {
  const { mutate, clean } = await createTestClient();
  await createUserAndLogin();

  const name = `test name ${Math.random()}`;
  const scientificName = name;

  const createVariables = {
    input: {
      name,
      scientificName,
      edibleParts: ['fruto', 'mangará'],
    },
  };
  const createResult = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables: createVariables,
  });
  clean();

  const insertedId = createResult.data.createPlant.plant.id;

  const updateVariables = {
    input: {
      id: insertedId,
      name,
      scientificName,
      edibleParts: ['fruto', 'mangará', 'casca'],
    },
  };

  const updateResult = await mutate({
    mutation: UPDATE_PLANT_MUTATION,
    variables: updateVariables,
  });
  clean();

  t.equal(updateResult.errors, undefined, 'should not throw an error on update');

  t.end();
  test.onFinish(() => process.exit());
});
