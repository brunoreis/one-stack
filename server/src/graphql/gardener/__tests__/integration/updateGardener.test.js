import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/integration/createTestClient';
import login from '../../../../__tests__/integration/login';

const UPDATE_GARDENER_MUTATION = gql`
  mutation UpdateGardener( $input: UpdateGardenerInput! ) {
    updateGardener ( input: $input ) {
      gardener {
        name
        description
      }
    }
  }
`;

test('update gardener', async (t) => {
  const { mutate } = await createTestClient();

  const updateVariables = {
    input: {
      name: 'Updated',
      description: 'has been updated'
    },
  };

  t.throws(
    mutate,
    'should throw error when not logged in',
  );

  
  await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });

  await login();

  const updateResult = await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });

  t.equal(
    updateResult.errors,
    undefined,
    'should not throw an error after login'
  );

  t.deepEqual(
    updateResult.data.updateGardener.gardener,
    {
      name: 'Updated',
      description: 'has been updated'
    },
    'should return the updated gardener',
  );
    
  t.end();
  // test.onFinish(() => process.exit(0));
});
