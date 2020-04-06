export default ({ db, tableName }) => async ({
  id,
}) => {
  const result = await db
    .first(
      'id',
      'name',
      'description',
      'entity_type_id as entityTypeId',
      'address',
      'address_complement as addressComplement',
      'city',
      'region',
      'country_code as countryCode',
      'post_code as postCode',
      'longitude',
      'latitude',
    )
    .table(tableName)
    .where('id', id);
  return result;
};
