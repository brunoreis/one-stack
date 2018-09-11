import db from '../../db';

export default async token => db
  .first()
  .table('user')
  .where('resetPasswordToken', token)
  .andWhere('resetPasswordExpires', '>', new Date());
