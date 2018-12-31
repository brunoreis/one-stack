export default ({ db, tableName }) => async ({
  id,
  name,
  scientificName,
  edibleParts,
  tips,
}) => {
  const result = await db(tableName)
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
      'createdBy',
    ]);
  return result[0];
};
