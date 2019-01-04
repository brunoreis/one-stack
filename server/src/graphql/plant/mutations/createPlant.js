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

  const result = await dataSources.plant.create({
    ...args.input,
    createdBy: loggedUser.gardener,
  });
  return {
    plant: result,
  };
};
