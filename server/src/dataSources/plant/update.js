export default ({ db, tableName }) => async ({
  id,
  name,
  scientificName,
  edibleParts,
  tips,
  picture,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
      scientificName,
      edibleParts,
      tips,
      picture,
    })
    .returning([
      'id',
      'name',
      'scientificName',
      'edibleParts',
      'picture',
      'tips',
      'createdBy',
    ]);
  return result[0];
};
