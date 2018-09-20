import UserDB from '../../db/queryBuilders/user';

export default async token => UserDB.getByReset(token);
