export default (
  { gardener },
  __,
  { dataSources }
) => dataSources.gardener.getById({ id: gardener });
