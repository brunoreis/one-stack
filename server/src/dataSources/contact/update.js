export default ({ db, tableName }) => async ({
  id,
  name,
  entityId,
  main,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      name,
      entity_id: entityId,
      main,
    })
    .returning([
      'id',
      'name',
      'entityId',
      'main',
    ]);
  return result[0];
};
