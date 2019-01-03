export default ({ db, tableName }) => async ({
  id,
  name,
  description,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
      description
    })
    .returning([
      'id',
      'name',
      'description',
    ]);
  return result[0];
};
