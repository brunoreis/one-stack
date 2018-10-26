import db from '../../db';

export default async (id) => {
  const [user] = await db('user')
    .where('id', id);

  const result = await db('user')
    .where('id', id)
    .del();

  await db('gardener')
    .where('id', user.gardener)
    .del();

  return result[0];
};
