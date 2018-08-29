import db from '../../db';

export default async name => db
  .first()
  .table('user')
  .where('name', name);
