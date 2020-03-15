export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entity.update({
    ...args.input,
  });
  return {
    entity: result,
  };
};
