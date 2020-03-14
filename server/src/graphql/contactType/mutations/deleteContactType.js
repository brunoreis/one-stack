export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactType.del(args.input);
  return {
    count: result
  };
};
