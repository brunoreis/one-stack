export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.linkType.del(args.input);
  return {
    count: result
  };
};
