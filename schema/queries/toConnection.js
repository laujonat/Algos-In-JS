const toConnection = (edges, totalCount, hasNextPage, hasPreviousPage) => {
  return {
    edges,
    pageInfo: {
      endCursor: edges.length === 0 ? null : edges[edges.length - 1].cursor,
      hasNextPage,
      hasPreviousPage,
      startCursor: edges.length === 0 ? null : edges[0].cursor,
    },
    totalCount,
  };
};

module.exports = toConnection;
