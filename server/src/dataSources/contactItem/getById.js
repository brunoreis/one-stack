export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'contact',
      'contact_type_id AS contactTypeId',
      'contact_id AS contactId',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
