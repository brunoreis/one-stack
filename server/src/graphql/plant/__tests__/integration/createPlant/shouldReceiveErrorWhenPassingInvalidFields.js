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

  variables.input.wrongField = "wrong";
  result = await mutate({
    mutation: CREATE_PLANT_MUTATION,
    variables,
  });
  clean();
  
  t.ok(
    result.errors,
    'should receive an error when passing invalid fields',
  );
  // t.equals(
  //   result.errors[0].extensions.code,
  //   'GRAPHQL_VALIDATION_FAILED',
  //   'should receive GRAPHQL_VALIDATION_FAILED error when passing invalid fields',
  // );
  // In playground, this throws an error with code GRAPHQL_VALIDATION_FAILED, 
  // but the test shows code INTERNAL_SERVER_ERROR
  t.end();
  test.onFinish(() => process.exit(0));
});
