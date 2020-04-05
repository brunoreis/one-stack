export default ({ db, tableName }) => async ({
  id,
}) => db(tableName)
  .where('id', id)
  .del();
