export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.linkType.update({
    ...args.input,
  });
  return {
    linkType: result,
  };
};
