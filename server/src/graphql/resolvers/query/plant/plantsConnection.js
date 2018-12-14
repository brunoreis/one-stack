export default async (_, __, context) => {
  let totalCount = 0;
  let edges = [];

  const plants = await context.data.plant.getAll();

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
