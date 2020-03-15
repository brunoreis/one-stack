export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.entity.create({
    ...args.input,
  });
  return {
    entity: result,
  };
};
