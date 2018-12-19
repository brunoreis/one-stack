import React from 'react';
import PropTypes from 'prop-types';

import GardenerDetails from './GardenerDetails/GardenerDetails';
import EditButton from '../../../components/Buttons/EditButton';

import '../../PageStyles.css';

const GardenerDetailsPage = ({ history, setHeader }) => {
  setHeader('O JARDINEIRO');
  return (
    <div>

      <GardenerDetails />

      <div className="fixed__max-width__bottom-right">
        <EditButton action={() => history.push('/gardener-edit')} />
      </div>

    </div>
  );
};

GardenerDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
  setHeader: PropTypes.func.isRequired,
};

export default GardenerDetailsPage;
