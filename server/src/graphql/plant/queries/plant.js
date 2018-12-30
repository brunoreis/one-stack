export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.plant.getById({
  id: args.id,
});
