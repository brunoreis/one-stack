export default ({ db, tableName }) => async () => {
  const user = db
    .select()
    .table(tableName);
  delete user.password;
  return user;
};

