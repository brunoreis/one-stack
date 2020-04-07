export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contactItem.getAll();
