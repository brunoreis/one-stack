import React from 'react';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerDetailsContainer from './GardenerDetails/GardenerDetailsContainer';
import EditButton from './EditButton/EditButton';

const goToEditPage = history => history.push('gardener-edit');

const GardenerDetailsPage = ({ history }) => (
  <div className="gardener-details-page">
    <Header text="O JARDINEIRO" />
    <GardenerDetailsContainer />
    <div className="gardener-details-page__bottom-fixed-flex">
      <div className="gardener-details-page__edit-button">
        <EditButton onClick={() => goToEditPage(history)} />
      </div>
      <Footer />
    </div>
  </div>
);

export default GardenerDetailsPage;
