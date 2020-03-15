export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.country.update({
    ...args.input,
  });
  return {
    country: result,
  };
};
