export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'contact',
      'contactTypeId',
      'contactId',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
