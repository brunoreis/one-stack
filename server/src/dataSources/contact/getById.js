export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'name',
      'entityId',
      'main',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
