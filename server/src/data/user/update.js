import UserDB from '../../db/queryBuilders/user';

export default async args => UserDB.update(args);
