export default () => ({
  pageInfo: {
    endCursor: '3',
    hasNextPage: false,
  },
  totalCount: 3,
  edges: [
    {
      cursor: '1',
      node: {
        id: 1,
        name: 'receita1',
      },
    },
    {
      cursor: '2',
      node: {
        id: 2,
        name: 'receita2',
      },
    },
    {
      cursor: '3',
      node: {
        id: 3,
        name: 'receita3',
      },
    },
  ],
});
