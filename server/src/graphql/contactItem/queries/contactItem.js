export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contactItem.getById({
  id: args.id,
});
