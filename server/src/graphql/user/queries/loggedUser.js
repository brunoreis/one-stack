import { AuthenticationError } from 'apollo-server';

export default async (
  _,
  __,
  {
    dataSources,
    loggedUser,
  },
) => {
  if (!loggedUser) {
    throw new AuthenticationError('Not logged in');
  }
  return dataSources.user.getById({ id: loggedUser.id });
};
