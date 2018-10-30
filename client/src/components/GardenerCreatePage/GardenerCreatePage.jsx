import React from 'react';

import './styles.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GardenerCreateFormContainer from './GardenerCreateForm/GardenerCreateFormContainer';

const GardenerCreatePage = () => (
  <div className="gardener-create-page">
    <Header text=" SOU NOVO" />
    <GardenerCreateFormContainer />
    <div className="gardener-create-page__bottom-fixed-flex">
      <Footer />
    </div>
  </div>
);

export default GardenerCreatePage;
