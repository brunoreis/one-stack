import test from 'tape';
import gql from 'graphql-tag';
import createTestClient from '../../../../__tests__/__integration__/createTestClient';

const UPDATE_GARDENER_MUTATION = gql`
  mutation UpdateGardener( $input: UpdateGardenerInput! ) {
    updateGardener ( input: $input ) {
      gardener {
        id
        name
        description
      }
    }
  }
`;

test('update gardener', async (t) => {
  t.plan(2);
  const { mutate } = await createTestClient();

  const updateVariables = {
    input: {
      name: 'Updated',
      description: 'has been updated'
    },
  };

  const updateResult = await mutate({
    mutation: UPDATE_GARDENER_MUTATION,
    variables: updateVariables,
  });

  t.equal(updateResult.errors, undefined, 'should not throw an error on update');
  t.deepEqual(
    updateResult.data.updateGardener.gardener,
    {
      id: '1',
      name: 'Updated',
      description: 'has been updated'
    },
    'should return the updated gardener',
  );
});
