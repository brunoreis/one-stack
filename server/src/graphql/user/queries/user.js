export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.user.getById({
  id: args.id,
});
