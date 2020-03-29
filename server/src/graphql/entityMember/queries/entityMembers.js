export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entityMember.getAll();
