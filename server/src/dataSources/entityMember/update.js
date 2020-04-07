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
      'entityId',
      'entityIdMember',
      'memberTypeId',
    ]);
  return result[0];
};
