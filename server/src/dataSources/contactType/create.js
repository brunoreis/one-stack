export default ({ db, tableName }) => async ({
  name,
}) => {
  const result = await db(tableName).insert({
    name,
  }).returning(
    [
      'id',
      'name',
    ],
  );
  return result[0];
};
