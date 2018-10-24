import bcrypt from 'bcrypt';
import db from '../../db';

export default async ({
  password,
  email,
}) => {
  const user = {
    password: bcrypt.hashSync(password, 10),
    email,
  };

  const result = await db('user').insert(user, 'id');
  user.id = result[0];
  return user;
};
