export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entity.getById({
  id: args.id,
});
