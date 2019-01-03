export default ({ db, tableName }) => async ({
  id,
}) => {
  const user = db
    .first()
    .table(tableName)
    .where('id', id);
  delete user.db;
  return user;
};
