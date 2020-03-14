export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.memberType.getById({
  id: args.id,
});
