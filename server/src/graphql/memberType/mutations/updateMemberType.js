export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.memberType.update({
    ...args.input,
  });
  return {
    memberType: result,
  };
};
