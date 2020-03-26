export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contact.getAll();
