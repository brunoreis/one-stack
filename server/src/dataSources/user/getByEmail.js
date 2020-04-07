export default ({ db, tableName }) => async ({
  email,
}) => {
  const user = await db
    .first(
      'id',
      'email',
      'entiyId',
    )
    .table(tableName)
    .where('email', email);
  delete user.password;
  return user;
};
