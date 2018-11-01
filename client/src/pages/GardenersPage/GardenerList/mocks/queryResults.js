import nodes from './mocks';

const emptyListResponse = {
  totalCount: 0,
  edges: [],
};

const dataResponse = {
  totalCount: 2,
  edges: [
    {
      cursor: '1',
      node: nodes.longList[0],
    },
    {
      cursor: '2',
      node: nodes.longList[1],
    },
  ],
};

export default {
  emptyListResponse,
  dataResponse,
};
