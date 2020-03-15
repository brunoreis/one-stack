export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entity.del(args.input);
  return {
    count: result
  };
};
