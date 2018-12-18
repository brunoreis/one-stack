import { AuthenticationError } from 'apollo-server';

export default async (_, args, context) => {
  const user = context.loggedUser;
  if (!user) {
    throw new AuthenticationError('Not logged in');
  }
  return context.data.gardener.update({
    ...args,
    id: user.gardener,
  });
};
