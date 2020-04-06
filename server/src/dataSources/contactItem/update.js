export default ({ db, tableName }) => async ({
  id,
  contact,
  contactTypeId,
  contactId,
}) => {
  const result = await db(tableName)
    .where('id', id)
    .update({
      contact,
      contact_type_id: contactTypeId,
      contact_id: contactId,
    })
    .returning([
      'id',
      'contact',
      'contact_type_id AS contactTypeId',
      'contact_id AS contactId',
    ]);
  return result[0];
};
