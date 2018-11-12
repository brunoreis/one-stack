import db from '../../db';

export default async ({
  id,
  name,
  description,
}) => {
  const result = await db('gardener')
    .where('id', id)
    .update({
      name,
      description,
    })
    .returning(['id', 'name', 'description']);
  return result[0];
};
