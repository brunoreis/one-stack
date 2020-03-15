export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.country.getAll();
