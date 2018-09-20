import UserDB from '../../db/queryBuilders/user';

export default async () => UserDB.getAll();
