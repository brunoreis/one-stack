export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityMember.update({
    ...args.input,
  });
  return {
    entityMember: result,
  };
};
