export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.contact.getById({
  id: args.id,
});
