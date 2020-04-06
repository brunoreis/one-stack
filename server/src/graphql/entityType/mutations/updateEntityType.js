export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityType.update({
    ...args.input,
  });
  return {
    entityType: result,
  };
};
