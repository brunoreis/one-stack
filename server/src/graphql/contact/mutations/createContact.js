export default async (
  _,
  args,
  {
    dataSources,
  },
) => {
  const result = await dataSources.contact.create({
    ...args.input,
  });
  return {
    contact: result,
  };
};
