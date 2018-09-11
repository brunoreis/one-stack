import db from '../../db';

export default async email => db
  .first()
  .table('user')
  .where('email', email);
