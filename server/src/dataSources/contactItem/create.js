export default ({ db, tableName }) => async ({
  contact,
  contactTypeId,
  contactId,
}) => {
  const result = await db(tableName).insert({
    contact,
    contact_type_id: contactTypeId,
    contact_id: contactId,
  }).returning(
    [
      'id',
      'contact',
      'contact_type_id as ContactTypeId',
      'contact_id as contactId',
    ],
  );
  return result[0];
};
