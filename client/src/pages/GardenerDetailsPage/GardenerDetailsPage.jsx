import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerDetails from './GardenerDetails/GardenerDetails';
import EditButton from './EditButton/EditButton';

const goToEditPage = history => history.push('gardener-edit');

const GardenerDetailsPage = ({ history }) => (
  <div className="gardener-details-page">
    <Header text="O JARDINEIRO" />
    <GardenerDetails />
    <div className="gardener-details-page__bottom-fixed-flex">
      <div className="gardener-details-page__edit-button">
        <EditButton onClick={() => goToEditPage(history)} />
      </div>
      <Footer />
    </div>
  </div>
);

GardenerDetailsPage.propTypes = {
  history: PropTypes.object.isRequired,
};

export default GardenerDetailsPage;
