export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.plant.update({
    ...args.input,
  });
  return {
    plant: result,
  };
};
