import React from 'react';

import ErrorAndLoading from '../../ErrorAndLoading/ErrorAndLoading';
import GardenerList from './GardenerList';

const getGardeners = (gardenersQuery) => {
  console.log('getGardeners: ', gardenersQuery);
  if (!gardenersQuery.gardenersConnection) return [];
  const edges = gardenersQuery.gardenersConnection.edges;
  const gardeners = [];
  edges.map((edge) => {
    gardeners.push(edge.node);
  });
  return gardeners;
};

const Wrapper = (props) => {
  const { gardenersQuery } = props;
  return (
    <ErrorAndLoading query={gardenersQuery}>
      <GardenerList gardeners={getGardeners(gardenersQuery)} />
    </ErrorAndLoading>
  );
};

export default Wrapper;
