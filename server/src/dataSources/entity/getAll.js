export default ({ db, tableName }) => async () => db
  .select(
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
  .table(tableName);
