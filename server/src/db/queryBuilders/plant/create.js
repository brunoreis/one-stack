import db from '../../db';

export default async (plant) => {
  const result = await db('plant').insert(plant, 'id');
  return {
    id: result[0],
    ...plant,
  };
};
