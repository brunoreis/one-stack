import UserDB from '../../db/queryBuilders/user';

export default async (_, args) => UserDB.getByReset(args.token);
