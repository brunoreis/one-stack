import UserDB from '../../db/queryBuilders/user';

export default async email => UserDB.getByEmail(email);
