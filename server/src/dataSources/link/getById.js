export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'link',
      'entityId',
      'linkTypeId',
      'main',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
