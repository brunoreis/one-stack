export default ({ db, tableName }) => async ({
  email
}) => {
  const user = await db
    .first(
      'id',
      'email',
      'entity_id AS entiyId',
    )
    .table(tableName)
    .where('email', email);
  delete user.password;
  return user;
};
