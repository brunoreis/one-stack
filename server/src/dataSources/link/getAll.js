export default ({ db, tableName }) => async () => db
  .select(
    'id',
    'link',
    'entityId',
    'main',
    'linkTypeId',
  )
  .select()
  .table(tableName);
