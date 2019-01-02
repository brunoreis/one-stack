export default ({ db, tableName }) => async ({
  email
}) => db
  .first()
  .table('user')
  .where('email', email);
