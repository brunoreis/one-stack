export default ({ db, tableName }) => async ({
  code,
  name,
}) => {
  const result = await db(tableName)
    .where('code', code)
    .update({
      name,
    })
    .returning([
      'code',
      'name',
    ]);
  return result[0];
};
