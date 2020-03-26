export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactItem.update({
    ...args.input,
  });
  return {
    contactItem: result,
  };
};
