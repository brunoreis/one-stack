export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'entity_id AS entityId',
      'entity_id_member AS entityIdMember',
      'member_type_id AS memberTypeId',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
