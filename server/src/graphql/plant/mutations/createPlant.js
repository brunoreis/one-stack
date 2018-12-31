export default async (
  _,
  args,
  {
    dataSources,
    loggedUser,
  },
) => {
  const result = await dataSources.plant.create({
    ...args.input,
    createdBy: loggedUser.gardener,
  });
  return {
    plant: result,
  };
};
