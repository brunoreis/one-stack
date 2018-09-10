import db from '../../db';

export default async ({
  id,
  name,
  email,
}) => {
  console.log('args: ', name, email);
  const result = await db('user')
    .where('id', id)
    .update({
      name,
      email,
    })
    .returning(['id', 'name', 'email']);
  return result[0];
};
