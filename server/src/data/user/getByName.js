import UserDB from '../../db/queryBuilders/user';

export default async (_, args) => {
  const data = await UserDB.getByName(args.username);
  if (!data) return null;

  return data;
};
