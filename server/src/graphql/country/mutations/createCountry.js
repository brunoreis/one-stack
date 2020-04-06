export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.country.create({
    ...args.input,
  });
  return {
    country: result,
  };
};
