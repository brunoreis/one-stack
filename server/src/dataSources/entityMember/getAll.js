export default ({ db, tableName }) => async () => db
   .select(
    'id',
    'entity_id AS entityId',
    'entity_id_member AS entityIdMember',
    'member_type_id AS memberTypeId',
  )
  .select()
  .table(tableName);
