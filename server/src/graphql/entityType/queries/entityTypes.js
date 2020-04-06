export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entityType.getAll();
