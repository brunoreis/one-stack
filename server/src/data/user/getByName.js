import UserDB from '../../db/queryBuilders/user';

export default async username => UserDB.getByName(username);
