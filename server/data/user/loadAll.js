import UserDB from '../../db/queryBuilders/user';

export default async () => {
  const data = await UserDB.getAll();
  if (!data) return null;

  return data;
};
