export default async (
  _,
  __,
  {
    dataSources,
  },
) => {
  let totalCount = 0;
  let edges = [];

  const gardeners = await dataSources.gardener.getAll();

  if (gardeners) {
    totalCount = gardeners.length;

    edges = gardeners.map(plant => ({
      cursor: plant.id,
      node: plant,
    }));
  }

  return {
    totalCount,
    edges,
  };
};
