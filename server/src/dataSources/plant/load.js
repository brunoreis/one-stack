export default ({ db }) => async id => db
  .first()
  .table('plant')
  .where('id', id);
