import db from '../../db';

export default async (
  email,
  password,
) => {
  const result = await db('user')
    .where('email', email)
    .update({
      password,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    })
    .returning(['id', 'name', 'email']);
  return result[0];
};
