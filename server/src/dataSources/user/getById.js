export default ({ db, tableName }) => async ({
  id,
}) => {
  const user = db
    .first(
      'id',
      'email',
      'entityId',
    )
    .table(tableName)
    .where('id', id);
  delete user.db;
  return user;
};
