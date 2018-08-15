import User from '../../../data/user';

export default async (_, args) => {
  console.log(args);
  return User.create(_, args);
};
