export default ({ db, tableName }) => async () => db
  .select(
    'id',
    'entityId',
    'entityIdMember',
    'memberTypeId',
  )
  .select()
  .table(tableName);
