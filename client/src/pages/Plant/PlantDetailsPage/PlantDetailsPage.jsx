import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';

import EditButton from '../../../components/Buttons/EditButton';
import ErrorHandler from '../../../components/ErrorAndLoading/ErrorHandler';
import PlantDetails from './PlantDetails';

import PLANT_QUERY from './PLANT_QUERY';

import '../../PageStyles.css';

const PlantDetailsPage = ({
  history,
  setHeader,
  match: { params: { id } },
}) => {
  setHeader('A PLANTA');

  const { loading, error, data: { plant } } = useQuery(
    PLANT_QUERY,
    {
      variables: { id: parseInt(id, 10) },
      // suspend: false,
    },
  );
  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  return (
    <div>
      <PlantDetails plant={plant} />
      <div className="fixed__max-width__bottom-right">
        <EditButton action={() => history.push({
          pathname: `/plant-edit/${id}`,
          state: { plant },
        })}
        />
      </div>
    </div>
  );
};

PlantDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

// export default PlantDetailsPage;
export default props => (
  <Suspense fallback={<div>Loading...</div>}>
    <PlantDetailsPage {...props} />
  </Suspense>
);
