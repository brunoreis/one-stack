export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.linkType.create({
    ...args.input,
  });
  return {
    linkType: result,
  };
};
