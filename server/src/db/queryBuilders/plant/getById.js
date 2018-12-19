import db from '../../db';

export default async id => db
  .first()
  .table('plant')
  .where('id', id);
