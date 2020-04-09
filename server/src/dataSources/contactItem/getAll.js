export default ({ db, tableName }) => async () => db
  .select(
    'id',
    'contact',
    'contactTypeId',
    'contactId',
  )
  .table(tableName);
