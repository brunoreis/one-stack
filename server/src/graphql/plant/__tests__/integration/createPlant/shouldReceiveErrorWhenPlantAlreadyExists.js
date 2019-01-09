import test from 'tape';

import createTestClient from '../../../../../__tests__/integration/createTestClient';
import CREATE_PLANT_MUTATION from './CREATE_PLANT_MUTATION';

test('create plant', async (t) => {
  const name = `test name ${Math.random()}`;
  const scientificName = name;
  const { mutate, clean } = await createTestClient();
  
  let variables = {
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
  clean();

  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();

  t.ok(
    result.errors,
    'should receive an error when plant already exists',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
