import UserDB from '../../db/queryBuilders/user';

export default async (_, args) => {
  const data = await UserDB.getById(args.id);
  if (!data) return null;

  return data;
};
