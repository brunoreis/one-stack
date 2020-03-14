export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.memberType.del(args.input);
  return {
    count: result
  };
};
