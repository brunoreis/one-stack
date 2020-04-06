export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactType.create({
    ...args.input,
  });
  return {
    contactType: result,
  };
};
