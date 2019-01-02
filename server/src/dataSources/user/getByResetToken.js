export default ({ db, tableName }) => async ({
  token,
}) => db
  .first()
  .table(tableName)
  .where('resetPasswordToken', token)
  .andWhere('resetPasswordExpires', '>', new Date());
