export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entityType.getById({
  id: args.id,
});
