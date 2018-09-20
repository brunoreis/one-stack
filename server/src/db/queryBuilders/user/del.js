import db from '../../db';

export default async (id) => {
  const result = await db('user')
    .where('id', id)
    .del('id');
  return result[0];
};
