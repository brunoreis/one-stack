export default ({ db, tableName }) => async () => {
  const user = db
    .select(
      'id',
      'email',
      'entity_id as entityId',
    )
    .table(tableName);
  delete user.password;
  return user;
};
