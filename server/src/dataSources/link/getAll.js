export default ({ db, tableName }) => async () => db
   .select(
    'id',
    'link',
    'entity_id AS entityId',
    'main',
    'link_type_id AS linkTypeId',
  )
  .select()
  .table(tableName);
