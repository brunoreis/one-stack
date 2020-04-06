export default ({ db, tableName }) => async () => db
  .select()
  .table(tableName);
