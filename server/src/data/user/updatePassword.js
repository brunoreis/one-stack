import UserDB from '../../db/queryBuilders/user';

export default async (email, password) => UserDB.updatePassword(email, password);
