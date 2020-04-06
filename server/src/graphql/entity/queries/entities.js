export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entity.getAll();
