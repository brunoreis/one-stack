export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityType.del(args.input);
  return {
    count: result,
  };
};
