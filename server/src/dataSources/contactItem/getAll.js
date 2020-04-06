export default ({ db, tableName }) => async () => db
   .select(
    'id',
    'contact',
    'contact_type_id AS contactTypeId',
    'contact_id AS contactId',
  )
  .table(tableName);
