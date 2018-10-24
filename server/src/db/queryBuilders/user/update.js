import db from '../../db';

export default async ({
  id,
  email,
  resetPasswordToken,
  resetPasswordExpires,
}) => {
  const result = await db('user')
    .where('id', id)
    .update({
      email,
      resetPasswordToken,
      resetPasswordExpires,
    })
    .returning(['id', 'email', 'resetPasswordToken', 'resetPasswordExpires']);
  return result[0];
};
