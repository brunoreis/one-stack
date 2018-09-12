import db from '../../db';

export default async ({
  id,
  name,
  email,
  resetPasswordToken,
  resetPasswordExpires,
}) => {
  console.log('rt: ', resetPasswordToken, 're: ', resetPasswordExpires);
  const result = await db('user')
    .where('id', id)
    .update({
      name,
      email,
      resetPasswordToken,
      resetPasswordExpires,
    })
    .returning(['id', 'name', 'email']);
  return result[0];
};
