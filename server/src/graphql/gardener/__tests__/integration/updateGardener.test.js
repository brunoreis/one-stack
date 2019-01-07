import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/integration/createTestClient';
import createUserAndLogin from '../../../../__tests__/integration/createUserAndLogin';

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

  
  let updateResult = await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });
  
  t.equals(
    updateResult.errors[0].extensions.code,
    'UNAUTHENTICATED',
    'should receive AuthenticationError when not logged in'
  );

  await createUserAndLogin();

  updateResult = await mutate({
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
  test.onFinish(() => process.exit(0));
});
