import db from '../../db';

export default async id => db
  .first()
  .table('user')
  .where('id', id);
