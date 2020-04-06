export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.memberType.getAll();
