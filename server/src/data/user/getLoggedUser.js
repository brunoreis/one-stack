import UserDB from '../../db/queryBuilders/user';

export default async (id) => {
  const data = await UserDB.getById(id);
  if (!data) return null;

  return data;
};
