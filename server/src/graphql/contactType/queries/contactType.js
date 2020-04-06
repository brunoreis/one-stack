export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contactType.getById({
  id: args.id,
});
