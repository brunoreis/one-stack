import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerDetails from './GardenerDetails/GardenerDetails';
import EditButton from './EditButton/EditButton';

const goToEditPage = history => history.push('gardener-edit');

const GardenerDetailsPage = ({ history }) => (
  <div>
    <Header text="O JARDINEIRO" />

    <div style={{
      position: 'absolute',
      top: '75px',
    }}>
      <div className="container-fluid bg-white">
        <GardenerDetails />
      </div>
    </div>

    <div className="fixed-bottom">
      <div className="row no-gutters justify-content-end">
        <EditButton onClick={() => goToEditPage(history)} />
        <div className="w-100" />
        <Footer />
      </div>
    </div>
  </div>
);

GardenerDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default GardenerDetailsPage;
