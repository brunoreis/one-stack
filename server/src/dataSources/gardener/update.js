export default ({ db, tableName }) => async ({
  id,
  name,
  description,
  picture,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
      description,
      picture,
    })
    .returning([
      'id',
      'name',
      'description',
      'picture',
    ]);
  return result[0];
};
