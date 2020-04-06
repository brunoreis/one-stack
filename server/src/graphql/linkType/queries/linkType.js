export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.linkType.getById({
  id: args.id,
});
