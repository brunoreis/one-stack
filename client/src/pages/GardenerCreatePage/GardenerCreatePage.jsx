import React from 'react';
import './styles.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import GardenerCreateForm from './GardenerCreateForm/GardenerCreateForm';

const GardenerCreatePage = () => (
  <div className="gardener-create-page">
    <Header text="SOU NOVO" />
    <GardenerCreateForm />
    <div className="gardener-create-page__bottom-fixed-flex">
      <Footer />
    </div>
  </div>
);

export default GardenerCreatePage;
