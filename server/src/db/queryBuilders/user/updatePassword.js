import bcrypt from 'bcrypt';
import db from '../../db';

export default async ({
  email,
  password,
}) => {
  console.log('args: ', email, password);
  const result = await db('user')
    .where('email', email)
    .update({
      password: bcrypt.hashSync(password, 10),
      resetPasswordToken: undefined,
      resetPasswordExpires: undefined,
    })
    .returning(['id', 'name', 'email']);
  return result[0];
};
