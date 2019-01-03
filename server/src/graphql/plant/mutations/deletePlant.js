export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.plant.del(args.input);
  return {
    count: result
  };
};
