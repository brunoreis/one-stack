export default ({ db, tableName }) => async ({
  link,
  main,
  entityId,
  linkTypeId,
}) => {
  const result = await db(tableName).insert({
    link,
    main,
    entity_id: entityId,
    link_type_id: linkTypeId,
  }).returning(
    [
      'id',
      'link',
      'main',
      'entity_id AS entityId',
      'link_type_id AS linkTypeId',
    ],
  );
  return result[0];
};
