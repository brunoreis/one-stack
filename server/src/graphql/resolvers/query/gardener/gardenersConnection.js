export default async (_, __, context) => {
  let totalCount = 0;
  let edges = [];

  const gardeners = await context.data.gardener.getAll();

  if (gardeners) {
    totalCount = gardeners.length;

    edges = gardeners.map(gardener => ({
      cursor: gardener.id,
      node: gardener,
    }));
  }

  return {
    totalCount,
    edges,
  };
};
