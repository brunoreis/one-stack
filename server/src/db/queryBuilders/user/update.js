import db from '../../db';

export default async ({
  id,
  name,
  email,
  resetPasswordToken,
  resetPasswordExpires,
}) => {
  const result = await db('user')
    .where('id', id)
    .update({
      name,
      email,
      resetPasswordToken,
      resetPasswordExpires,
    })
    .returning(['id', 'name', 'email', 'resetPasswordToken', 'resetPasswordExpires']);
  return result[0];
};
