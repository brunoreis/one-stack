export default ({ db, tableName }) => async ({
  name,
  main,
  entityId,
}) => {
  const result = await db(tableName).insert({
    name,
    main,
    entity_id: entityId,
  }).returning(
    [
      'id',
      'name',
      'main',
      'entityId',
    ],
  );
  return result[0];
};
