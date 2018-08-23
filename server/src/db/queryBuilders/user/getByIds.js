import db from '../../db';

export default async ids => db
  .first()
  .table('user')
  .whereIn('id', ids);
