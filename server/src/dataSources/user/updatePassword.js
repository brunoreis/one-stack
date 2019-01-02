export default ({ db, tableName }) => async ({
  email,
  password,
}) => {
  const result = await db(tableName)
    .where('email', email)
    .update({
      password,
      resetPasswordToken: null,
      resetPasswordExpires: null,
    })
    .returning(['id', 'email']);
  return result[0];
};
