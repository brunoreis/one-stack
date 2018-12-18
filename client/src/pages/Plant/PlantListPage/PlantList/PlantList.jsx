import React from 'react';
import { useQuery } from 'react-apollo-hooks';

import ErrorHandler from '../../../../components/ErrorAndLoading/ErrorHandler';

import PlantItem from './PlantItem/PlantItem';
import PLANTS_QUERY from './PlantsQuery';
import getConnectionNodes from '../../../../helpers/getConnectionNodes';

const PlantList = () => {
  const { loading, error, data } = useQuery(
    PLANTS_QUERY,
    { suspend: false },
  );
  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  const plants = getConnectionNodes(data.plantsConnection);
  console.log(plants);
  return (
    <div>
      {plants.map(plant => (
        <div key={plant.id}>
          <PlantItem plant={plant} />
        </div>
      ))}
    </div>
  );
};

export default PlantList;
