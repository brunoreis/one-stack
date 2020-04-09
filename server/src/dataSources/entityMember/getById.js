export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'entityId',
      'entityIdMember',
      'memberTypeId',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
