export default ({ db, tableName }) => async ({
  code,
}) => {
  const result = await db
    .first()
    .table(tableName)
    .where('code', code);
  return result;
};
