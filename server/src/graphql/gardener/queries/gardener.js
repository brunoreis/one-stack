export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.gardener.getById({
  id: args.id,
});
