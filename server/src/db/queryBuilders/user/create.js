import bcrypt from 'bcrypt';
import db from '../../db';

export default async ({
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
    password: bcrypt.hashSync(password, 10),
    email,
    gardener: gardenerId,
  };

  const result = await db('user').insert(user, 'id');
  user.id = result[0];
  return user;
};
