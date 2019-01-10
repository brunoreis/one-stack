import test from 'tape';

import createTestClient from '../../../../../__tests__/integration/createTestClient';
import CREATE_PLANT_MUTATION from './CREATE_PLANT_MUTATION';
import createUserAndLogin from '../../../../../__tests__/integration/createUserAndLogin';

test('create plant', async (t) => {
  const name = `test name ${Math.random()}`;
  const scientificName = name;
  const { mutate } = await createTestClient();

  const loggedUser = await createUserAndLogin();

  const variables = {
    input: {
      name,
      scientificName,
      edibleParts: ['fruto', 'mangará'],
    },
  };
  let result = null;

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });

  t.equal(
    result.data.createPlant.plant.createdBy.id,
    loggedUser.id.toString(),
    'should relate plant to logged user',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
