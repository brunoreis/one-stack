export default ({ db, tableName }) => async ({
  email,
  password,
}) => {
  const result = await db(tableName)
    .where('email', email)
    .update({
      password,
      reset_password_token: null,
      reset_password_expires: null,
    })
    .returning(['id', 'email']);
  return result[0];
};
