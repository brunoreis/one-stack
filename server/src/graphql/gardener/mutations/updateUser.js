import { AuthenticationError } from 'apollo-server';

export default async (
  _,
  args,
  {
    dataSources,
    loggedUser,
  },
) => {
  if (!loggedUser) {
    throw new AuthenticationError('Not logged in');
  }

  const result = await dataSources.user.update({
    ...args.input,
    id: loggedUser.gardener,
  });
  return {
    user: result,
  };
};
