// take a look at pgadmin to understand the table structure

// destructuring and recomposing the object is quite verbose
// but a nice way to document/validate what can be sent here.
// if needed we might comment the expected types also
export default ({ db, tableName }) => async ({
  name,
  scientificName,
  edibleParts,
  tips,
  picture,
  createdBy,
}) => {
  const result = await db(tableName).insert({
    name,
    scientificName,
    edibleParts,
    tips,
    picture,
    createdBy,
  }).returning(
    [
      'id',
      'name',
      'createdBy',
      'created_at',
      'scientificName',
      'edibleParts',
      'tips',
      'picture',
    ],
  );
  return result[0];
};
