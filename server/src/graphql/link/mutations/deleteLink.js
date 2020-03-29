export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.link.del(args.input);
  return {
    count: result
  };
};
