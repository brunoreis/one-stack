export default ({ db, tableName }) => async ({
  email
}) => db
  .first()
  .table(tableName)
  .where('email', email);
