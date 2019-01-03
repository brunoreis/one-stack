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
      resetPasswordToken,
      resetPasswordExpires,
    })
    .returning([
      'id',
      'email',
      'resetPasswordToken',
      'resetPasswordExpires'
    ]);
  return result[0];
};
