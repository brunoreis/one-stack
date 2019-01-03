export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.user.create(args.input);
  return {
    user: result,
  };
};
