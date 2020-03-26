export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactItem.del(args.input);
  return {
    count: result
  };
};
