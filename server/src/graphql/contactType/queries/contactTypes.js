export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contactType.getAll();
