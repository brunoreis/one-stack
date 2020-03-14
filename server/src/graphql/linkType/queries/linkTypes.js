export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.linkType.getAll();
