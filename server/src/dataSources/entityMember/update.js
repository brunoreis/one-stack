export default ({ db, tableName }) => async ({
  id,
  entityId,
  entityIdMember,
  memberTypeId,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      entity_id: entityId,
      entity_id_member: entityIdMember,
      member_type_id: memberTypeId,
    })
    .returning([
      'id',
      'entity_id AS entityId',
      'entity_id_member AS entityIdMember',
      'member_type_id AS memberTypeId',
    ]);
  return result[0];
};
