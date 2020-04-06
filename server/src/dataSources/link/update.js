export default ({ db, tableName }) => async ({
  id,
  link,
  entityId,
  linkTypeId,
  main,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      link,
      entity_id: entityId,
      link_type_id: linkTypeId,
      main,
    })
    .returning([
      'id',
      'link',
      'entity_id AS entityId',
      'link_type_id AS linkTypeId',
      'main',
    ]);
  return result[0];
};
