import bcrypt from 'bcryptjs';

export default ({ db, tableName }) => async ({
  password,
  email,
  name,
  description,
  picture,
}) => {
  const gardener = {
    name,
    description,
    picture,
  };

  const [gardenerId] = await db('gardener').insert(gardener, 'id');

  const user = {
    email,
    password: bcrypt.hashSync(password, 10),
    gardener: gardenerId,
  };

  const result = await db(tableName).insert(user).returning([
    'id',
    'email',
    'gardener',
  ]);

  return result[0];
};
