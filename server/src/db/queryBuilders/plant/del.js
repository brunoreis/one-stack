import db from '../../db';

export default async id => db('plant')
  .where('id', id)
  .del();
