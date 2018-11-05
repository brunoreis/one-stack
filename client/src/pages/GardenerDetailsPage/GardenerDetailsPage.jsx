import React from 'react';

import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerDetailsContainer from './GardenerDetails/GardenerDetailsContainer';
import EditButton from './EditButton/EditButton';

const GardenerDetailsPage = () => (
  <div className="gardener-details-page">
    <Header text="O JARDINEIRO" />
    <GardenerDetailsContainer />
    <div className="gardener-details-page__bottom-fixed-flex">
      <div className="gardener-details-page__edit-button">
        <EditButton />
      </div>
      <Footer />
    </div>
  </div>
);

export default GardenerDetailsPage;
