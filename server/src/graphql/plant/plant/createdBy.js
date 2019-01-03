export default (
  { createdBy },
  __,
  { dataSources },
) => dataSources.gardener.getById({ id: createdBy });
