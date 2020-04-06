export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.link.getAll();
