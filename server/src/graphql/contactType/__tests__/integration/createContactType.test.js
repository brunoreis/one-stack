import test from 'tape';
import { omit } from 'ramda';
import createTestClient from '../../../../__tests__/integration/createTestClient';

import CREATE_CONTACT_TYPE_MUTATION from '../mutations/CREATE_CONTACT_TYPE_MUTATION';

test('create contactType', async (t) => {
  const { mutate, clean } = await createTestClient();
  const randomName = `${Math.random()}`;
  const variables = {
    input: {
      name: randomName,
    },
  };

  const result = await mutate({
    mutation: CREATE_CONTACT_TYPE_MUTATION,
    variables,
  });

  t.equal(result.errors, undefined, 'should not throw an error');
  t.deepEqual(
    omit(['id'], result.data.createContactType.contactType),
    {
      name: randomName,
    },
    'should return the created contactType',
  );

  clean();

  const duplicate = await mutate({
    mutation: CREATE_CONTACT_TYPE_MUTATION,
    variables,
  });

  t.equal(
    duplicate.errors[0].extensions.exception.code,
    '23505',
    'should receive error 23505 if contactType already exists',
  );

  clean();

  const empty = await mutate({
    mutation: CREATE_CONTACT_TYPE_MUTATION,
    variables: {
      input: {
        name: null,
      },
    },
  });

  t.notEqual(
    empty.errors[0].message.search('invalid value null'),
    -1,
    'should receive error if name is null',
  );

  t.end();
  test.onFinish(() => process.exit(0));
});
