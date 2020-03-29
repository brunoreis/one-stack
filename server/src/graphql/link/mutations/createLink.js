export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.link.create({
    ...args.input,
  });
  return {
    link: result,
  };
};
