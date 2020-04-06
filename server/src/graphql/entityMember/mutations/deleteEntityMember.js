export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityMember.del(args.input);
  return {
    count: result
  };
};
