export default ({ db, tableName }) => async ({
  code
}) => db(tableName)
  .where('code', code)
  .del();
