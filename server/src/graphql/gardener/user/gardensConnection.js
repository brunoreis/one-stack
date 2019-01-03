export default () => ({
  pageInfo: {
    endCursor: '4',
    hasNextPage: false,
  },
  totalCount: 4,
  edges: [
    {
      cursor: '1',
      node: {
        id: 1,
        name: 'garden1',
      },
    },
    {
      cursor: '2',
      node: {
        id: 2,
        name: 'garden2',
      },
    },
    {
      cursor: '3',
      node: {
        id: 3,
        name: 'garden3',
      },
    },
    {
      cursor: '4',
      node: {
        id: 4,
        name: 'garden4',
      },
    },
  ],
});
