import { AuthenticationError } from 'apollo-server';

export default async (_, args, context) => {
  const loggedUser = context.loggedUser;
  if (!loggedUser) {
    throw new AuthenticationError('Not logged in');
  }
  return context.data.user.getLoggedUser(loggedUser.id);
};
