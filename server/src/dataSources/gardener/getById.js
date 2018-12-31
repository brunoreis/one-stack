export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first()
    .table(tableName)
    .where('id', id);
  return result;
};
