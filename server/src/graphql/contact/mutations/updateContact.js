export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contact.update({
    ...args.input,
  });
  return {
    contact: result,
  };
};
