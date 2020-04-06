export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'link',
      'entity_id AS entityId',
      'link_type_id AS linkTypeId',
      'main',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
