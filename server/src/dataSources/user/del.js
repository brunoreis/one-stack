export default ({ db, tableName }) => async ({
  id,
}) => {
  const [user] = await db('user')
    .where('id', id);

  await db('plant')
    .where('createdBy', user.gardener)
    .del();

  const result = await db('user')
    .where('id', id)
    .del();

  await db('gardener')
    .where('id', user.gardener)
    .del();

  return result;
}
