export default ({ db, tableName }) => async ({
  id,
  email,
  resetPasswordToken,
  resetPasswordExpires,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      email,
      reset_password_token: resetPasswordToken,
      reset_password_expires: resetPasswordExpires,
    })
    .returning([
      'id',
      'email',
      'entityId',
      'resetPasswordToken',
      'resetPasswordExpires',
    ]);
  return result[0];
};
