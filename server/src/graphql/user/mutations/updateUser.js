export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.user.update({
    ...args.input,
  });
  return {
    user: result,
  };
};
