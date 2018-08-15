import db from '../../db';

export default async ({
  id,
}) => {
  const result = await db('user')
    .where('id', id)
    .del('id');
  console.log('Deleted user with id ', result[0]);
  return result[0];
};
