export default ({ db, tableName }) => async ({
  id,
  name,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
    })
    .returning([
      'id',
      'name',
    ]);
  return result[0];
};
