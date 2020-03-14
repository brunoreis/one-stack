export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactType.update({
    ...args.input,
  });
  return {
    contactType: result,
  };
};
