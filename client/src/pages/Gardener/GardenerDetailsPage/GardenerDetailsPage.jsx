import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo-hooks';

import GardenerDetails from './GardenerDetails/GardenerDetails';
import EditButton from '../../../components/Buttons/EditButton';

import '../../PageStyles.css';

import LOGGED_USER_QUERY from './LoggedUserQuery';

import ErrorHandler from '../../../components/ErrorAndLoading/ErrorHandler';

const GardenerDetailsPage = ({ history, setHeader }) => {
  setHeader('O JARDINEIRO');

  const queryResult = useQuery(
    LOGGED_USER_QUERY,
    {
      suspend: false,
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  );
  const {
    loading,
    error,
    errors,
    data,
  } = queryResult;

  if (loading) return <div>Fetching</div>;
  if (error) return <ErrorHandler error={error} />;
  if (errors) return <ErrorHandler error={{ graphQLErrors: errors }} />;

  const gardener = data.loggedUser.gardener;

  return (
    <div>

      <GardenerDetails {...gardener} />

      <div className="fixed__max-width__bottom-right">
        <EditButton action={() => history.push({
          pathname: '/gardener-edit',
          state: { gardener },
        })}
        />
      </div>

    </div>
  );
};

GardenerDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
};

export default GardenerDetailsPage;
