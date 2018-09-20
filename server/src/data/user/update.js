import UserDB from '../../db/queryBuilders/user';

export default async user => UserDB.update(user);
