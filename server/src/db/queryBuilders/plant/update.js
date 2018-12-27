import db from '../../db';

export default async ({
  id,
  name,
  scientificName,
  edibleParts,
  tips,
}) => {
  const result = await db('plant')
    .where('id', id)
    .update({
      name,
      scientificName,
      edibleParts,
      tips,
    })
    .returning([
      'id',
      'name',
      'scientificName',
      'edibleParts',
      'tips',
    ]);
  return result[0];
};
