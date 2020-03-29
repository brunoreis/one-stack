export default async (
  _,
  args,
  {
    dataSources,
  },
) => dataSources.entityMember.getById({
  id: args.id,
});
