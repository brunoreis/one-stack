export default async (
  _,
  __,
  {
    dataSources,
  },
) => {
  let totalCount = 0;
  let edges = [];

  const plants = await dataSources.plant.getAll();

  if (plants) {
    totalCount = plants.length;

    edges = plants.map(plant => ({
      cursor: plant.id,
      node: plant,
    }));
  }

  return {
    totalCount,
    edges,
  };
};
