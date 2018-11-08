import db from '../../db';

export default async id => db
  .first()
  .table('gardener')
  .where('id', id);
