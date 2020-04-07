export default ({ db, tableName }) => async ({
  entityId,
  entityIdMember,
  memberTypeId,
}) => {
  const result = await db(tableName).insert({
    entity_id: entityId,
    entity_id_member: entityIdMember,
    member_type_id: memberTypeId,
  }).returning(
    [
      'id',
      'entityId',
      'entityIdMember',
      'memberTypeId',
    ],
  );
  return result[0];
};
