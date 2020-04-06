export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.user.getAll();
