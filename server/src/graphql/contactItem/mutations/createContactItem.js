export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contactItem.create({
    ...args.input,
  });
  return {
    contactItem: result,
  };
};
