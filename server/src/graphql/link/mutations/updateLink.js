export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.link.update({
    ...args.input,
  });
  return {
    link: result,
  };
};
