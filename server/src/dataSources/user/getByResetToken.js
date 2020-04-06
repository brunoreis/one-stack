export default ({ db, tableName }) => async ({
  token,
}) => db
  .first()
  .table(tableName)
  .where('reset_password_token', token)
  .andWhere('reset_password_expires', '>', new Date());
