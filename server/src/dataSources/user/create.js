import bcrypt from 'bcryptjs';

export default ({ db, tableName }) => async ({
  password,
  email,
  name,
}) => {
  const entity = {
    name,
  };

  const [newEntityId] = await db('entities').insert(entity, 'id');

  const user = {
    email,
    password: bcrypt.hashSync(password, 10),
    entity_id: newEntityId,
  };

  const result = await db(tableName).insert(user).returning([
    'id',
    'email',
    'entity_id AS entityId',
  ]);

  return result[0];
};
