export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.memberType.create({
    ...args.input,
  });
  return {
    memberType: result,
  };
};
