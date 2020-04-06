export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.country.getByCode({
  code: args.code,
});
