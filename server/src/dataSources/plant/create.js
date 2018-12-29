export default ({ db }) => async ({
  name,
  scientificName,
  edibleParts,
  createdBy,
}) => {
  const result = await db('plant').insert({
    name,
    scientificName,
    edibleParts,
    createdBy,
  }).returning(
    [
      'id',
      'name',
      'createdBy',
      'created_at',
      'scientificName',
      'edibleParts',
    ],
  );
  return result[0];
};
