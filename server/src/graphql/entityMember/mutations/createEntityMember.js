export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entityMember.create({
    ...args.input,
  });
  return {
    entityMember: result,
  };
};
