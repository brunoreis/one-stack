export default ({ db, tableName }) => async ({
  code,
  name,
}) => {
  const result = await db(tableName).insert({
    code,
    name,
  }).returning(
    [
      'code',
      'name',
    ],
  );
  return result[0];
};
