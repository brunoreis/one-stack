export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.link.getById({
  id: args.id,
});
