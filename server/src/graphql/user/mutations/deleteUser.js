export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.user.del(args.input);
  return {
    count: result,
  };
};
