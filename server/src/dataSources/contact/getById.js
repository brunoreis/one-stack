export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'name',
      'entity_id AS entityId',
      'main',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
