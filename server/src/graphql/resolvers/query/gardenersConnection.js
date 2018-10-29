export default async (_, __, context) => {
  const gardeners = await context.data.gardener.getAll();
  if (!gardeners) {
    console.log('lista vazia');
    return {
      totalCount: 0,
      edges: [],
    };
  }
  const totalCount = gardeners.length;

  const edges = [];

  gardeners.map((gardener) => {
    edges.push({
      cursor: gardener.id,
      node: gardener,
    });
    return null;
  });

  return {
    totalCount,
    edges,
  };
};
