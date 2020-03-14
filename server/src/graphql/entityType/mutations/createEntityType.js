export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityType.create(args.input);
  return {
    entityType: result,
  };
};
