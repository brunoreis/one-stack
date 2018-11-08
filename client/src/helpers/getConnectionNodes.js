export default (connection) => {
  let nodes = [];
  if (connection) {
    const { edges } = connection;
    nodes = edges.map(({ node }) => node);
  }
  return nodes;
};
