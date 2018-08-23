import db from '../../db';

export default async () => db
  .select()
  .table('user');
